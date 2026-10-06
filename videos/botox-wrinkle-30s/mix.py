"""Mix narration over the soundtrack with ducking. Usage: python3 mix.py <soundtrack.wav> <lines.json> <out.wav>"""
import json, sys, wave
import numpy as np

def read(path):
    with wave.open(path) as w:
        sr, ch = w.getframerate(), w.getnchannels()
        x = np.frombuffer(w.readframes(w.getnframes()), '<i2').astype(np.float64) / 32768
    return sr, x.reshape(-1, ch)

sr, music = read(sys.argv[1])
lines = json.load(open(sys.argv[2]))
voice = np.zeros(len(music))
for start, path, _, _ in lines:
    vsr, v = read(path)
    v = v[:, 0]
    if vsr != sr:  # resample (linear) to the music rate
        v = np.interp(np.arange(int(len(v) * sr / vsr)) / sr, np.arange(len(v)) / vsr, v)
    i = int(start * sr); voice[i:i + len(v)] += v[: len(voice) - i]
voice /= np.abs(voice).max()

# duck music under speech (smoothed envelope)
active = (np.abs(voice) > .02).astype(float)
k = int(.25 * sr)
env = np.convolve(active, np.ones(k) / k, 'same')
duck = 1 - .55 * np.clip(env * 3, 0, 1)
mix = music * duck[:, None] * .9 + voice[:, None] * .85
mix /= np.abs(mix).max() / .95
with wave.open(sys.argv[3], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
