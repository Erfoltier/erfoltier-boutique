"""Synthesize narration lines with Open JTalk (HTS voice tohoku-f01, CC-BY 4.0).
Usage: python3 narration.py <voice_dir> <out_dir>
Writes one wav per line plus lines.json with [start, file, duration]."""
import json, subprocess, sys, wave, os
import numpy as np

VOICE_DIR, OUT = sys.argv[1], sys.argv[2]
DIC = '/var/lib/mecab/dic/open-jtalk/naist-jdic'
os.makedirs(OUT, exist_ok=True)

# (start sec, window end sec, voice, text for TTS — kana where reading matters)
LINES = [
    (0.10, 2.95, 'angry',   'そのシワ、ほうちしてて、へいき？'),
    (3.50, 7.90, 'neutral', '気づけば、おでこ、眉間、目尻にも。'),
    (8.50, 13.90, 'neutral', '表情ジワは、放っておくと、無表情でも消えない、刻まれたシワへ。'),
    (14.30, 17.40, 'neutral', '原因は、表情筋の、動きのクセ。'),
    (17.50, 18.95, 'neutral', 'だからこそ。'),
    (19.30, 24.90, 'happy',  'ボトックス注射で、筋肉の動きをやわらげ、シワをできにくく。'),
    (25.40, 29.60, 'happy',  '刻まれる前に。いしだひふか、びようひふかへ、ご相談ください。'),
]

def synth(text, voice, path, speed):
    subprocess.run(['open_jtalk', '-x', DIC, '-m', f'{VOICE_DIR}/tohoku-f01-{voice}.htsvoice',
                    '-r', f'{speed:.2f}', '-fm', '0', '-a', '0.55', '-ow', path],
                   input=text.encode(), check=True)
    # trim leading/trailing silence so the fit check measures speech only
    with wave.open(path) as w:
        sr, data = w.getframerate(), np.frombuffer(w.readframes(w.getnframes()), '<i2')
    loud = np.nonzero(np.abs(data) > 300)[0]
    data = data[max(0, loud[0] - int(.03 * sr)): loud[-1] + int(.08 * sr)]
    with wave.open(path, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(data.tobytes())
    return len(data) / sr

out = []
for i, (start, end, voice, text) in enumerate(LINES):
    path = f'{OUT}/line{i}.wav'
    speed = 1.0
    dur = synth(text, voice, path, speed)
    while dur > (end - start) and speed < 1.6:   # speed up until the line fits its scene
        speed += .05
        dur = synth(text, voice, path, speed)
    out.append([start, path, round(dur, 2), round(speed, 2)])
    print(f'{start:5.2f}-{end:5.2f}  dur={dur:.2f}  speed={speed:.2f}  {text}')
json.dump(out, open(f'{OUT}/lines.json', 'w'), ensure_ascii=False)
