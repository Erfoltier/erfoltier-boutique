#!/usr/bin/env python3
"""記事中の「AIっぽい」言い回しや文体の癖を検出する簡易チェッカー。

使い方: python3 check_ai_phrases.py 記事.md
検出結果は目安。文脈上自然なら残してよい。
"""
import re
import sys

# (パターン, 理由)
PHRASES = [
    (r"について(解説|ご紹介|紹介)します", "前置き定型。何が分かるかを具体的に"),
    (r"をご紹介します", "前置き定型"),
    (r"いかがでしたか", "締めの定型。削除推奨"),
    (r"と言えるでしょう", "曖昧な断定。体験なら言い切る"),
    (r"ではないでしょうか", "多用注意。推測は根拠とセットで"),
    (r"することができ", "「〜できます」に簡潔化"),
    (r"(重要|大切)(です|なのです|になります)", "ラベル連発注意。理由を具体的に"),
    (r"ポイントです", "ラベル連発注意"),
    (r"さまざまな|様々な", "抽象語。具体的な数・名前に"),
    (r"魅力的な|洗練された|素晴らしい", "抽象的な形容。場面描写に置き換え"),
    (r"本記事|当記事", "「この記事」または省略"),
    (r"に迫ります|の世界へ", "AI的な煽り表現"),
    (r"ぜひ参考に", "締めの定型"),
    (r"という方も多いのではないでしょうか", "読者決めつけ定型"),
    (r"結論から言うと", "1記事1回まで"),
    (r"このように", "段落まとめ癖に注意"),
    (r"——|──", "ダッシュは日本語では不自然になりやすい"),
    (r"見ていきましょう|みていきましょう", "解説記事定型"),
    (r"について詳しく", "前置き定型"),
    (r"欠かせません|不可欠です", "硬い定型表現"),
]


def main(path: str) -> int:
    with open(path, encoding="utf-8") as f:
        lines = f.read().splitlines()

    hits = []
    for no, line in enumerate(lines, 1):
        for pat, reason in PHRASES:
            for m in re.finditer(pat, line):
                hits.append((no, m.group(0), reason))

    text = "\n".join(lines)
    print(f"# チェック結果: {path}")
    if hits:
        print(f"\n## 要注意表現 ({len(hits)}件)")
        for no, word, reason in hits:
            print(f"- {no}行目「{word}」: {reason}")
    else:
        print("\n要注意表現は見つかりませんでした。")

    # 文末の連続チェック（です／ます で終わる文が5連続以上）
    sentences = [s for s in re.split(r"(?<=[。！？])", text.replace("\n", "")) if s.strip()]
    run, warned = 0, []
    for i, s in enumerate(sentences):
        if re.search(r"(です|ます)[。！？]$", s.strip()):
            run += 1
            if run == 5:
                warned.append(sentences[i - 4][:20])
        else:
            run = 0
    if warned:
        print(f"\n## 文末「です／ます」が5文以上連続 ({len(warned)}箇所)")
        for head in warned:
            print(f"- 「{head}…」から")

    # 感嘆符・箇条書きの多さ
    excl = text.count("！") + text.count("!")
    bullets = sum(1 for l in lines if re.match(r"\s*([-*・]|\d+\.)\s", l))
    body = sum(1 for l in lines if l.strip())
    print("\n## 全体の傾向")
    print(f"- 感嘆符: {excl}個" + ("（多め。減らすと落ち着いた印象に）" if excl > 5 else ""))
    if body:
        ratio = bullets / body
        print(f"- 箇条書き行の割合: {ratio:.0%}" + ("（体験記としては多め。文章で書く）" if ratio > 0.3 else ""))
    print(f"- 本文文字数（記号含む概算）: {len(text.replace(chr(10), ''))}字")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("使い方: python3 check_ai_phrases.py 記事.md", file=sys.stderr)
        sys.exit(1)
    sys.exit(main(sys.argv[1]))
