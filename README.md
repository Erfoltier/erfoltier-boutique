# Erfoltier Boutique

ラグジュアリーブランド（アパレル／レザー・ファブリック製品／時計／アクセサリー／その他）の新品・中古を扱うセレクトブティックサイト。
[Astro](https://astro.build) による静的サイトで、日本語・英語・韓国語に対応しています。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

## ページ構成（各言語 `/ja/` `/en/` `/ko/` 配下）

| パス | 内容 |
| --- | --- |
| `/` | トップ（ブラウザの言語設定で振り分け） |
| `products/` | 商品一覧（カテゴリー・ブランド・新品／中古の絞り込み、並び替え） |
| `products/{管理番号}/` | 商品詳細 |
| `brands/`, `brands/{slug}/` | ブランドから探す |
| `categories/`, `categories/{slug}/` | カテゴリーから探す |
| `cart/` | カート（ブラウザの localStorage に保存） |
| `faq/` | よくあるご質問 |
| `contact/` | お問い合わせフォーム・会社概要（`#company`） |
| `instagram/` | Instagram |

## 差し替えが必要な箇所

- **商品データ**: `src/data/catalog.ts` — 現在はサンプル。写真は `public/images/` に置き、各商品の `image` にパスを設定するとプレースホルダーの線画から写真に切り替わります。
- **会社情報・Instagram URL**: `src/data/site.ts` の〔 〕部分（会社名、代表者、所在地、古物商許可番号）。
- **FAQ**: `src/data/site.ts` の `faq`。
- **画面の文言**: `src/i18n/ui.ts`。
- **お問い合わせフォームの送信先**: `src/pages/[lang]/contact.astro` の `FORM_ENDPOINT`（Formspree 等）。未設定の間は送信せず完了メッセージのみ表示します。
- **決済**: 未実装。カートの「ご購入手続きへ」は、カート内の管理番号を入力済みのお問い合わせフォームへ移動します。Shopify / Stripe 等との連携が必要です。

## 新品・中古の区別

`condition: 'N'` の商品は「新品」、それ以外（S / A / AB / B）は「中古」として表示・絞り込みされます。
