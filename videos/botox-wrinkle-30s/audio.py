"""Synthesize the 30s soundtrack (BGM pad + hits) as soundtrack.wav. Usage: python3 audio.py [out.wav]"""
import sys, wave
import numpy as np

SR, DUR = 44100, 30.0
N = int(SR * DUR)
t = np.arange(N) / SR
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(7)

def add(sig, start, gain=1.0, pan=0.0):
    i = int(start * SR); j = min(N, i + len(sig))
    s = sig[: j - i] * gain
    L[i:j] += s * (1 - pan) ** .5 if pan > 0 else s
    R[i:j] += s * (1 + pan) ** .5 if pan < 0 else s

def lowpass(x, a):
    y = np.empty_like(x); acc = 0.0
    for k, v in enumerate(x):
        acc += a * (v - acc); y[k] = acc
    return y

def env(n, att, rel_tau):
    tt = np.arange(n) / SR
    return np.minimum(1, tt / max(att, 1e-4)) * np.exp(-tt / rel_tau)

def tick(f=220, d=.35):
    n = int(d * SR); tt = np.arange(n) / SR
    body = np.sin(2 * np.pi * f * tt * (1 - .3 * tt)) * env(n, .002, .09)
    click = lowpass(rng.standard_normal(n), .25) * env(n, .001, .015)
    return body * .8 + click * .5

def impact():
    n = int(1.8 * SR); tt = np.arange(n) / SR
    freq = 45 + 90 * np.exp(-tt * 9)
    boom = np.sin(2 * np.pi * np.cumsum(freq) / SR) * env(n, .003, .45)
    crack = lowpass(rng.standard_normal(n), .35) * env(n, .001, .08)
    return np.tanh(1.6 * (boom + .6 * crack))

def whoosh(d=.7, a_from=.02, a_to=.35):
    n = int(d * SR)
    noise = rng.standard_normal(n)
    a = np.linspace(a_from, a_to, n)
    y = np.empty(n); acc = 0.0
    for k in range(n):
        acc += a[k] * (noise[k] - acc); y[k] = acc
    shape = np.sin(np.pi * np.linspace(0, 1, n)) ** 2
    return y * shape

def bell(f, d=3.0):
    n = int(d * SR); tt = np.arange(n) / SR
    y = sum(g * np.sin(2 * np.pi * f * r * tt) * np.exp(-tt * k)
            for r, g, k in [(1, 1, 1.3), (2.0, .45, 2.2), (2.76, .3, 3.0), (5.4, .12, 5)])
    return y * np.minimum(1, tt / .003)

def pluck(f, d=1.2):
    n = int(d * SR); tt = np.arange(n) / SR
    return (np.sin(2 * np.pi * f * tt) + .3 * np.sin(4 * np.pi * f * tt)) * env(n, .004, .3)

def pad(freqs, start, end, gain=.05):
    n = int((end - start + 1.2) * SR); tt = np.arange(n) / SR
    y = np.zeros(n)
    for f in freqs:
        for det in (-.12, .12):
            y += np.sin(2 * np.pi * f * (1 + det / 100) * tt + rng.uniform(0, 6.28))
    y *= .5 + .5 * (np.sin(2 * np.pi * .25 * tt) * .15 + .85)
    a = np.minimum(1, tt / .9)
    rel = np.clip((end - start + 1.2 - tt) / 1.2, 0, 1)
    add(lowpass(y, .08) * a * rel, start, gain)

hz = lambda m: 440 * 2 ** ((m - 69) / 12)

# --- hook (dark, tense) ---
add(lowpass(rng.standard_normal(int(3.2 * SR)), .01) * np.linspace(.4, 1, int(3.2 * SR)), 0, .5)  # rumble
add(np.sin(2 * np.pi * 55 * t[: int(3.2 * SR)]) * np.linspace(.2, .6, int(3.2 * SR)), 0, .25)
add(tick(260), .10, .55); add(tick(240), .80, .6)
add(impact(), 1.45, .9)
add(whoosh(.6, .01, .4), 2.75, .9)

# --- chord pads ---
pad([hz(m) for m in (57, 64, 67, 71, 72)], 3.2, 8.0)          # Am(add9)
pad([hz(m) for m in (50, 57, 60, 65, 69)], 8.0, 14.0)         # Dm9
pad([hz(m) for m in (52, 59, 62, 64, 69)], 14.0, 19.0, .055)  # E7sus (tension)
pad([hz(m) for m in (53, 60, 64, 67, 72)], 19.0, 22.0, .055)  # Fmaj7
pad([hz(m) for m in (48, 55, 64, 67, 71)], 22.0, 25.0, .055)  # Cmaj7
pad([hz(m) for m in (48, 55, 62, 64, 71)], 25.0, 30.0, .06)   # Cmaj9

# soft pulse (heartbeat-ish) during S3/S4
for k in np.arange(8.0, 19.0, .857):
    add(tick(70, .3), k, .35)

# --- accents ---
for k, m in [(3.95, 76), (4.75, 79), (5.55, 81)]: add(pluck(hz(m)), k, .18, -.3)
for k, m in [(8.6, 74), (10.1, 77), (11.6, 81)]: add(pluck(hz(m)), k, .2, .3)
add(whoosh(.5, .02, .3), 14.0, .5)
add(whoosh(.9, .01, .5), 18.3, .6)
add(bell(hz(84)), 19.0, .28); add(bell(hz(91)), 19.08, .14, .4)
for k, m in [(21.2, 79), (21.8, 84), (22.4, 88)]: add(bell(hz(m), 1.5), k, .1, -.2)
add(whoosh(.7, .01, .3), 24.8, .5)
add(bell(hz(79)), 26.7, .2); add(bell(hz(86)), 26.75, .12, .4)

mix = np.stack([L, R], 1)
fade = np.clip((DUR - t) / 1.5, 0, 1)[:, None]
mix *= fade
mix /= np.abs(mix).max() / .89
out = sys.argv[1] if len(sys.argv) > 1 else 'soundtrack.wav'
with wave.open(out, 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
