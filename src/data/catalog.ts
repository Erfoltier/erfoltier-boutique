import type { Localized } from '../i18n/ui';

/*
 * サンプルの商品データです。実際の在庫に差し替えてください。
 * 画像を用意したら、各商品の `image` に public/ 以下のパス（例: '/images/p-001.jpg'）を設定すると
 * プレースホルダーの代わりに写真が表示されます。
 */

export type CategorySlug = 'apparel' | 'leather' | 'fabric' | 'watches' | 'accessories' | 'other';
export type Condition = 'N' | 'S' | 'A' | 'AB' | 'B';
export type SubSlug = 'eyewear' | 'charm' | 'scarf' | 'hat' | 'tie' | 'kitchen' | 'cushion' | 'linen';

export interface SubCategory {
  slug: SubSlug;
  name: Localized;
}

export interface Category {
  slug: CategorySlug;
  name: Localized;
  en: string;
  description: Localized;
}

export interface Brand {
  slug: string;
  name: string;
  kana: string;
  origin: Localized;
}

export interface Product {
  id: string;
  brand: string;
  category: CategorySlug;
  /** 「その他」カテゴリー内のアイテム種別 */
  sub?: SubSlug;
  name: Localized;
  price: number;
  condition: Condition;
  material: Localized;
  color: Localized;
  size: string;
  accessories: Localized;
  description: Localized;
  arrived: string; // ISO date
  sold?: boolean;
  image?: string;
}

export const categories: Category[] = [
  {
    slug: 'apparel',
    en: 'Apparel',
    name: { ja: 'アパレル', en: 'Apparel', ko: '의류' },
    description: {
      ja: 'コート、ジャケット、ニットなど、仕立ての美しいウェア。',
      en: 'Coats, jackets and knitwear with impeccable tailoring.',
      ko: '코트, 재킷, 니트 등 재단이 아름다운 웨어.',
    },
  },
  {
    slug: 'leather',
    en: 'Leather Goods',
    name: { ja: 'レザーグッズ', en: 'Leather Goods', ko: '가죽 제품' },
    description: {
      ja: 'バッグ、財布、革小物。職人技が宿るレザー製品。',
      en: 'Bags, wallets and small leather goods shaped by master artisans.',
      ko: '가방, 지갑, 가죽 소품. 장인의 솜씨가 깃든 가죽 제품.',
    },
  },
  {
    slug: 'fabric',
    en: 'Fabric Goods',
    name: { ja: 'ファブリック', en: 'Fabric Goods', ko: '패브릭 제품' },
    description: {
      ja: 'キャンバスやナイロンなど、布素材のバッグ・ポーチ。',
      en: 'Bags and pouches in canvas, nylon and other textiles.',
      ko: '캔버스, 나일론 등 패브릭 소재의 가방·파우치.',
    },
  },
  {
    slug: 'watches',
    en: 'Watches',
    name: { ja: 'ウォッチ', en: 'Watches', ko: '시계' },
    description: {
      ja: '機械式から名作ドレスウォッチまで、時を刻む芸術品。',
      en: 'From mechanical icons to dress-watch classics.',
      ko: '기계식부터 명작 드레스 워치까지, 시간을 새기는 예술품.',
    },
  },
  {
    slug: 'accessories',
    en: 'Accessories',
    name: { ja: 'アクセサリー', en: 'Accessories', ko: '액세서리' },
    description: {
      ja: 'リング、ネックレス、ブレスレット。装いを格上げするジュエリー。',
      en: 'Rings, necklaces and bracelets to elevate every look.',
      ko: '반지, 목걸이, 팔찌. 스타일을 한층 높여 주는 주얼리.',
    },
  },
  {
    slug: 'other',
    en: 'Others',
    name: { ja: 'その他', en: 'Others', ko: '기타' },
    description: {
      ja: 'サングラス、チャーム、ツイリー・スカーフ、帽子、ネクタイ、キッチン用品、クッション、タオル・ブランケットなど。',
      en: 'Sunglasses, charms, twillies and scarves, hats, ties, kitchenware, cushions, towels and blankets.',
      ko: '선글라스, 참, 트윌리·스카프, 모자, 넥타이, 주방용품, 쿠션, 타월·블랭킷 등.',
    },
  },
];

export const subCategories: SubCategory[] = [
  { slug: 'eyewear', name: { ja: 'サングラス', en: 'Sunglasses', ko: '선글라스' } },
  { slug: 'charm', name: { ja: 'チャーム', en: 'Charms', ko: '참' } },
  { slug: 'scarf', name: { ja: 'ツイリー・スカーフ', en: 'Twillies & Scarves', ko: '트윌리·스카프' } },
  { slug: 'hat', name: { ja: '帽子', en: 'Hats', ko: '모자' } },
  { slug: 'tie', name: { ja: 'ネクタイ', en: 'Ties', ko: '넥타이' } },
  { slug: 'kitchen', name: { ja: 'キッチン用品', en: 'Kitchenware', ko: '주방용품' } },
  { slug: 'cushion', name: { ja: 'クッション', en: 'Cushions', ko: '쿠션' } },
  { slug: 'linen', name: { ja: 'タオル・ブランケット', en: 'Towels & Blankets', ko: '타월·블랭킷' } },
];

export const brands: Brand[] = [
  { slug: 'hermes', name: 'HERMÈS', kana: 'エルメス', origin: { ja: 'フランス', en: 'France', ko: '프랑스' } },
  { slug: 'louis-vuitton', name: 'LOUIS VUITTON', kana: 'ルイ・ヴィトン', origin: { ja: 'フランス', en: 'France', ko: '프랑스' } },
  { slug: 'chanel', name: 'CHANEL', kana: 'シャネル', origin: { ja: 'フランス', en: 'France', ko: '프랑스' } },
  { slug: 'cartier', name: 'Cartier', kana: 'カルティエ', origin: { ja: 'フランス', en: 'France', ko: '프랑스' } },
  { slug: 'rolex', name: 'ROLEX', kana: 'ロレックス', origin: { ja: 'スイス', en: 'Switzerland', ko: '스위스' } },
  { slug: 'omega', name: 'OMEGA', kana: 'オメガ', origin: { ja: 'スイス', en: 'Switzerland', ko: '스위스' } },
  { slug: 'gucci', name: 'GUCCI', kana: 'グッチ', origin: { ja: 'イタリア', en: 'Italy', ko: '이탈리아' } },
  { slug: 'bottega-veneta', name: 'BOTTEGA VENETA', kana: 'ボッテガ・ヴェネタ', origin: { ja: 'イタリア', en: 'Italy', ko: '이탈리아' } },
  { slug: 'prada', name: 'PRADA', kana: 'プラダ', origin: { ja: 'イタリア', en: 'Italy', ko: '이탈리아' } },
  { slug: 'celine', name: 'CELINE', kana: 'セリーヌ', origin: { ja: 'フランス', en: 'France', ko: '프랑스' } },
  { slug: 'tiffany', name: 'TIFFANY & Co.', kana: 'ティファニー', origin: { ja: 'アメリカ', en: 'USA', ko: '미국' } },
  { slug: 'burberry', name: 'BURBERRY', kana: 'バーバリー', origin: { ja: 'イギリス', en: 'UK', ko: '영국' } },
];

const L = (ja: string, en: string, ko: string): Localized => ({ ja, en, ko });

export const products: Product[] = [
  {
    id: 'EF-24001', brand: 'hermes', category: 'leather', price: 1_980_000, condition: 'S',
    name: L('トゴ レザー ハンドバッグ 30', 'Togo Leather Handbag 30', '토고 레더 핸드백 30'),
    material: L('トゴカーフ', 'Togo calfskin', '토고 카프스킨'), color: L('エトゥープ', 'Étoupe', '에토프'),
    size: 'W30 × H22 × D16 cm', accessories: L('保存袋、箱、カデナ、クロシェット', 'Dust bag, box, lock, clochette', '더스트백, 박스, 카데나, 클로셰트'),
    description: L('落ち着いたエトゥープにゴールド金具を合わせた、永く愛用できる定番の一品。角スレもほとんどなく、極めて良好な状態です。', 'Timeless Étoupe with gold hardware. Corners show virtually no wear — an exceptional example.', '차분한 에토프 컬러에 골드 하드웨어를 매치한 스테디셀러. 모서리 마모가 거의 없는 매우 좋은 상태입니다.'),
    arrived: '2026-09-26',
  },
  {
    id: 'EF-24002', brand: 'rolex', category: 'watches', price: 1_650_000, condition: 'A',
    name: L('オイスター パーペチュアル 36', 'Oyster Perpetual 36', '오이스터 퍼페추얼 36'),
    material: L('オイスタースチール', 'Oystersteel', '오이스터스틸'), color: L('ブライトブルー文字盤', 'Bright blue dial', '브라이트 블루 다이얼'),
    size: 'Case 36 mm', accessories: L('箱、保証書', 'Box, warranty card', '박스, 보증서'),
    description: L('自動巻き。日常使いに最適な定番モデル。オーバーホール済みで、精度も良好です。', 'Automatic. An everyday classic, recently serviced and running within spec.', '오토매틱. 데일리로 착용하기 좋은 스테디 모델. 오버홀 완료로 정확도도 양호합니다.'),
    arrived: '2026-09-25',
  },
  {
    id: 'EF-24003', brand: 'chanel', category: 'leather', price: 890_000, condition: 'A',
    name: L('マトラッセ チェーンショルダー 25', 'Matelassé Chain Shoulder Bag 25', '마틀라세 체인 숄더백 25'),
    material: L('ラムスキン', 'Lambskin', '램스킨'), color: L('ブラック', 'Black', '블랙'),
    size: 'W25 × H15 × D6 cm', accessories: L('保存袋、ギャランティカード', 'Dust bag, authenticity card', '더스트백, 개런티 카드'),
    description: L('ダブルフラップの定番デザイン。キルティングのふくらみもしっかり残っています。', 'The iconic double flap, with quilting that retains its full, plump shape.', '더블 플랩의 스테디 디자인. 퀼팅의 볼륨감도 잘 유지되어 있습니다.'),
    arrived: '2026-09-24',
  },
  {
    id: 'EF-24004', brand: 'hermes', category: 'other', sub: 'scarf', price: 68_000, condition: 'N',
    name: L('カレ 90 シルクスカーフ', 'Carré 90 Silk Scarf', '카레 90 실크 스카프'),
    material: L('シルク100%', '100% silk', '실크 100%'), color: L('マルチカラー', 'Multicolor', '멀티컬러'),
    size: '90 × 90 cm', accessories: L('箱', 'Box', '박스'),
    description: L('職人によるハンドロール仕上げ。鮮やかな色彩が首元を華やかに彩ります。', 'Hand-rolled edges and vivid color to light up any neckline.', '장인의 핸드롤 마감. 선명한 컬러가 목선을 화사하게 연출합니다.'),
    arrived: '2026-09-23',
  },
  {
    id: 'EF-24005', brand: 'cartier', category: 'accessories', price: 520_000, condition: 'S',
    name: L('ラブ ブレスレット', 'LOVE Bracelet', '러브 브레이슬릿'),
    material: L('K18 イエローゴールド', '18K yellow gold', '18K 옐로 골드'), color: L('ゴールド', 'Gold', '골드'),
    size: '17', accessories: L('箱、ドライバー、証明書', 'Box, screwdriver, certificate', '박스, 드라이버, 보증서'),
    description: L('ビスモチーフが象徴的な永遠のアイコン。小傷も少なく、輝きの美しい一本です。', 'The enduring icon with its signature screw motif. Minimal marks and a beautiful luster.', '스크루 모티프가 상징적인 영원한 아이콘. 잔기스가 적고 광택이 아름답습니다.'),
    arrived: '2026-09-22',
  },
  {
    id: 'EF-24006', brand: 'louis-vuitton', category: 'fabric', price: 198_000, condition: 'AB',
    name: L('モノグラム キャンバス トートバッグ MM', 'Monogram Canvas Tote MM', '모노그램 캔버스 토트백 MM'),
    material: L('モノグラム・キャンバス', 'Monogram canvas', '모노그램 캔버스'), color: L('ブラウン', 'Brown', '브라운'),
    size: 'W32 × H29 × D17 cm', accessories: L('保存袋', 'Dust bag', '더스트백'),
    description: L('A4も収まる使い勝手の良いサイズ。ハンドルに多少の焼けがありますが、全体的に良好です。', 'Roomy enough for A4 documents. Light patina on the handles; very good overall.', 'A4도 들어가는 실용적인 사이즈. 핸들에 약간의 태닝이 있으나 전체적으로 양호합니다.'),
    arrived: '2026-09-20',
  },
  {
    id: 'EF-24007', brand: 'omega', category: 'watches', price: 780_000, condition: 'A',
    name: L('スピードマスター プロフェッショナル', 'Speedmaster Professional', '스피드마스터 프로페셔널'),
    material: L('ステンレススチール', 'Stainless steel', '스테인리스 스틸'), color: L('ブラック文字盤', 'Black dial', '블랙 다이얼'),
    size: 'Case 42 mm', accessories: L('箱、保証書', 'Box, warranty card', '박스, 보증서'),
    description: L('手巻きクロノグラフ。月面着陸の歴史を背負う名作です。', 'Manual-winding chronograph — the legend that went to the Moon.', '수동 와인딩 크로노그래프. 달 착륙의 역사를 지닌 명작입니다.'),
    arrived: '2026-09-19',
  },
  {
    id: 'EF-24008', brand: 'bottega-veneta', category: 'leather', price: 128_000, condition: 'N',
    name: L('イントレチャート 二つ折り財布', 'Intrecciato Bi-fold Wallet', '인트레치아토 반지갑'),
    material: L('ナッパレザー', 'Nappa leather', '나파 레더'), color: L('ダークグリーン', 'Dark green', '다크 그린'),
    size: 'W11 × H9.5 cm', accessories: L('保存袋、箱', 'Dust bag, box', '더스트백, 박스'),
    description: L('ブランドを象徴する編み込みレザー。柔らかな手触りが魅力です。', 'The house’s signature woven leather, wonderfully supple to the touch.', '브랜드를 상징하는 위빙 레더. 부드러운 촉감이 매력적입니다.'),
    arrived: '2026-09-18',
  },
  {
    id: 'EF-24009', brand: 'burberry', category: 'apparel', price: 158_000, condition: 'A',
    name: L('ケンジントン トレンチコート', 'The Kensington Trench Coat', '켄싱턴 트렌치코트'),
    material: L('コットンギャバジン', 'Cotton gabardine', '코튼 개버딘'), color: L('ハニー', 'Honey', '허니'),
    size: 'UK 8', accessories: L('ベルト', 'Belt', '벨트'),
    description: L('英国製。クラシックなシルエットで、季節を問わず活躍します。', 'Made in England. A classic silhouette for every season.', '영국 제조. 클래식한 실루엣으로 계절에 상관없이 활용도가 높습니다.'),
    arrived: '2026-09-17',
  },
  {
    id: 'EF-24010', brand: 'tiffany', category: 'accessories', price: 86_000, condition: 'N',
    name: L('スマイル ペンダント ネックレス', 'Smile Pendant Necklace', '스마일 펜던트 목걸이'),
    material: L('K18 ローズゴールド', '18K rose gold', '18K 로즈 골드'), color: L('ローズゴールド', 'Rose gold', '로즈 골드'),
    size: 'Chain 41 cm', accessories: L('保存袋、箱', 'Pouch, box', '파우치, 박스'),
    description: L('やわらかな曲線が肌に寄り添う、日常使いしやすいデザインです。', 'A gentle curve that sits softly on the skin — easy to wear every day.', '부드러운 곡선이 피부에 자연스럽게 어우러지는 데일리 디자인입니다.'),
    arrived: '2026-09-15',
  },
  {
    id: 'EF-24011', brand: 'celine', category: 'leather', price: 245_000, condition: 'A',
    name: L('トリオンフ ショルダーバッグ', 'Triomphe Shoulder Bag', '트리옹프 숄더백'),
    material: L('シャイニーカーフスキン', 'Shiny calfskin', '샤이니 카프스킨'), color: L('タン', 'Tan', '탄'),
    size: 'W22.5 × H16.5 × D7.5 cm', accessories: L('保存袋、ストラップ', 'Dust bag, strap', '더스트백, 스트랩'),
    description: L('トリオンフ金具が上品なアクセントに。フォーマルにもカジュアルにも。', 'Triomphe hardware adds a refined touch — dressed up or down.', '트리옹프 하드웨어가 고급스러운 포인트. 포멀에도 캐주얼에도 어울립니다.'),
    arrived: '2026-09-14',
  },
  {
    id: 'EF-24012', brand: 'prada', category: 'apparel', price: 98_000, condition: 'S',
    name: L('Re-Nylon シングルブレスト ジャケット', 'Re-Nylon Single-breasted Jacket', 'Re-나일론 싱글 브레스트 재킷'),
    material: L('リナイロン', 'Re-Nylon', '리나일론'), color: L('ブラック', 'Black', '블랙'),
    size: 'IT 46', accessories: L('ハンガー、ガーメント', 'Hanger, garment bag', '행거, 가먼트 백'),
    description: L('トライアングルロゴを配した、軽やかでモダンな一着。', 'Light and modern, finished with the triangle logo.', '트라이앵글 로고가 돋보이는 가볍고 모던한 재킷.'),
    arrived: '2026-09-12',
  },
  {
    id: 'EF-24013', brand: 'gucci', category: 'other', sub: 'scarf', price: 42_000, condition: 'N',
    name: L('GG ウール ストール', 'GG Wool Stole', 'GG 울 스톨'),
    material: L('ウール、シルク', 'Wool, silk', '울, 실크'), color: L('ベージュ', 'Beige', '베이지'),
    size: '180 × 45 cm', accessories: L('箱', 'Box', '박스'),
    description: L('軽く暖かいウールシルク混。GGパターンが控えめに映えます。', 'Light, warm wool-silk with a subtle GG pattern.', '가볍고 따뜻한 울 실크 혼방. GG 패턴이 은은하게 돋보입니다.'),
    arrived: '2026-09-10',
  },
  {
    id: 'EF-24014', brand: 'cartier', category: 'watches', price: 690_000, condition: 'AB',
    name: L('タンク マスト LM', 'Tank Must LM', '탱크 머스트 LM'),
    material: L('ステンレススチール、カーフストラップ', 'Stainless steel, calf strap', '스테인리스 스틸, 카프 스트랩'), color: L('シルバー文字盤', 'Silver dial', '실버 다이얼'),
    size: 'Case 33.7 × 25.5 mm', accessories: L('箱', 'Box', '박스'),
    description: L('端正な角型ケースのドレスウォッチ。ケースに小傷がありますが、ストラップは新品に交換済みです。', 'The quintessential rectangular dress watch. Light case marks; strap replaced with new.', '단정한 사각 케이스의 드레스 워치. 케이스에 잔기스가 있으나 스트랩은 새것으로 교체했습니다.'),
    arrived: '2026-09-08',
  },
  {
    id: 'EF-24015', brand: 'chanel', category: 'apparel', price: 420_000, condition: 'A',
    name: L('ツイード ジャケット', 'Tweed Jacket', '트위드 재킷'),
    material: L('ウール、シルク', 'Wool, silk', '울, 실크'), color: L('アイボリー', 'Ivory', '아이보리'),
    size: 'FR 38', accessories: L('予備ボタン', 'Spare buttons', '여분 단추'),
    description: L('メゾンを象徴するツイード。CCボタンと裏地のチェーンが美しいシルエットを保ちます。', 'Signature tweed, with CC buttons and a hem chain that keeps the line perfect.', '메종을 상징하는 트위드. CC 단추와 안감 체인이 아름다운 실루엣을 유지합니다.'),
    arrived: '2026-09-05',
  },
  {
    id: 'EF-24016', brand: 'louis-vuitton', category: 'leather', price: 88_000, condition: 'B',
    name: L('エピ ジッピー・ウォレット', 'Epi Zippy Wallet', '에피 지피 월릿'),
    material: L('エピ・レザー', 'Epi leather', '에피 레더'), color: L('ノワール', 'Noir', '누아르'),
    size: 'W19.5 × H10.5 cm', accessories: L('なし', 'None', '없음'),
    description: L('型押しレザーで傷が目立ちにくい長財布。角スレと内側に使用感があります。', 'Textured leather that hides wear well. Some corner rubbing and interior use.', '엠보싱 가죽이라 흠집이 잘 보이지 않는 장지갑. 모서리 마모와 안쪽 사용감이 있습니다.'),
    arrived: '2026-09-02', sold: true,
  },
  {
    id: 'EF-24017', brand: 'hermes', category: 'accessories', price: 158_000, condition: 'S',
    name: L('シェーヌダンクル ブレスレット', 'Chaîne d’Ancre Bracelet', '셴 당크르 브레이슬릿'),
    material: L('シルバー925', 'Sterling silver', '실버 925'), color: L('シルバー', 'Silver', '실버'),
    size: 'TGM', accessories: L('保存袋、箱', 'Pouch, box', '파우치, 박스'),
    description: L('船の錨の鎖をモチーフにしたメンズライクなデザイン。仕上げ済みです。', 'Inspired by an anchor chain, with a bold, masculine feel. Professionally polished.', '닻의 체인을 모티프로 한 남성적인 디자인. 폴리싱 완료.'),
    arrived: '2026-08-30',
  },
  {
    id: 'EF-24019', brand: 'chanel', category: 'other', sub: 'eyewear', price: 62_000, condition: 'S',
    name: L('ココマーク サングラス', 'CC Logo Sunglasses', 'CC 로고 선글라스'),
    material: L('アセテート', 'Acetate', '아세테이트'), color: L('ブラック', 'Black', '블랙'),
    size: '54□17 140', accessories: L('ケース、クロス', 'Case, cloth', '케이스, 클로스'),
    description: L('テンプルのココマークが上品に映える、ボリュームのあるフレーム。', 'A bold frame finished with the CC logo on the temples.', '템플의 CC 로고가 고급스럽게 돋보이는 볼륨감 있는 프레임.'),
    arrived: '2026-09-21',
  },
  {
    id: 'EF-24020', brand: 'louis-vuitton', category: 'other', sub: 'charm', price: 74_000, condition: 'N',
    name: L('バッグチャーム・キーホルダー', 'Bag Charm & Key Holder', '백 참·키홀더'),
    material: L('メタル', 'Metal', '메탈'), color: L('ゴールド', 'Gold', '골드'),
    size: 'H11 cm', accessories: L('保存袋、箱', 'Pouch, box', '파우치, 박스'),
    description: L('バッグに華やかさを添える、モノグラム・フラワーのチャーム。', 'Monogram Flower charm to add a touch of polish to any bag.', '가방에 화사함을 더해 주는 모노그램 플라워 참.'),
    arrived: '2026-09-16',
  },
  {
    id: 'EF-24018', brand: 'gucci', category: 'leather', price: 168_000, condition: 'A',
    name: L('ホースビット 1955 ショルダーバッグ', 'Horsebit 1955 Shoulder Bag', '홀스빗 1955 숄더백'),
    material: L('GGスプリーム・キャンバス、レザー', 'GG Supreme canvas, leather', 'GG 수프림 캔버스, 레더'), color: L('ベージュ／エボニー', 'Beige/Ebony', '베이지/에보니'),
    size: 'W25 × H18 × D8 cm', accessories: L('保存袋', 'Dust bag', '더스트백'),
    description: L('1955年のアーカイブから復刻されたホースビットが印象的です。', 'Horsebit hardware revived from the 1955 archive.', '1955년 아카이브에서 복각된 홀스빗이 인상적입니다.'),
    arrived: '2026-08-28',
  },
  {
    id: 'EF-24021', brand: 'prada', category: 'fabric', price: 138_000, condition: 'A',
    name: L('Re-Nylon ショルダーバッグ', 'Re-Nylon Shoulder Bag', 'Re-나일론 숄더백'),
    material: L('リナイロン、サフィアーノレザー', 'Re-Nylon, Saffiano leather', '리나일론, 사피아노 레더'), color: L('ブラック', 'Black', '블랙'),
    size: 'W22 × H18 × D6 cm', accessories: L('保存袋、ストラップ', 'Dust bag, strap', '더스트백, 스트랩'),
    description: L('軽くて丈夫なナイロン素材。トライアングルロゴが映えるデイリーバッグです。', 'Light, durable nylon finished with the triangle logo — an everyday essential.', '가볍고 튼튼한 나일론 소재. 트라이앵글 로고가 돋보이는 데일리 백입니다.'),
    arrived: '2026-09-27',
  },
  {
    id: 'EF-24022', brand: 'hermes', category: 'other', sub: 'scarf', price: 38_000, condition: 'N',
    name: L('ツイリー', 'Twilly', '트윌리'),
    material: L('シルク100%', '100% silk', '실크 100%'), color: L('ブルー／ホワイト', 'Blue/White', '블루/화이트'),
    size: '86 × 5 cm', accessories: L('箱', 'Box', '박스'),
    description: L('バッグのハンドルに巻いたり、ヘアアクセサリーにも。', 'Wrap it around a bag handle or wear it in your hair.', '가방 핸들에 감거나 헤어 액세서리로도 활용할 수 있습니다.'),
    arrived: '2026-09-27',
  },
  {
    id: 'EF-24023', brand: 'burberry', category: 'other', sub: 'hat', price: 36_000, condition: 'A',
    name: L('ヴィンテージチェック バケットハット', 'Vintage Check Bucket Hat', '빈티지 체크 버킷햇'),
    material: L('コットン', 'Cotton', '코튼'), color: L('アーカイブベージュ', 'Archive beige', '아카이브 베이지'),
    size: 'M', accessories: L('なし', 'None', '없음'),
    description: L('リバーシブル仕様で、無地面とチェック面の両方を楽しめます。', 'Reversible — plain on one side, check on the other.', '리버시블 사양으로 무지와 체크 양면을 즐길 수 있습니다.'),
    arrived: '2026-09-11',
  },
  {
    id: 'EF-24024', brand: 'hermes', category: 'other', sub: 'tie', price: 32_000, condition: 'N',
    name: L('シルク ネクタイ', 'Silk Tie', '실크 넥타이'),
    material: L('シルク100%', '100% silk', '실크 100%'), color: L('ネイビー', 'Navy', '네이비'),
    size: 'W8 cm', accessories: L('箱', 'Box', '박스'),
    description: L('遊び心のある小紋柄。ビジネスシーンに品よく映えます。', 'A playful micro-print that stays refined for business.', '위트 있는 잔무늬 패턴. 비즈니스 룩에 품위 있게 어울립니다.'),
    arrived: '2026-09-09',
  },
  {
    id: 'EF-24025', brand: 'hermes', category: 'other', sub: 'kitchen', price: 58_000, condition: 'N',
    name: L('ポーセリン ディナープレート 2枚セット', 'Porcelain Dinner Plates, Set of 2', '포슬린 디너 플레이트 2개 세트'),
    material: L('ポーセリン', 'Porcelain', '포슬린'), color: L('ホワイト／ゴールド', 'White/Gold', '화이트/골드'),
    size: 'Ø 27 cm', accessories: L('箱', 'Box', '박스'),
    description: L('食卓を格上げする、繊細なゴールドの縁取り。ギフトにもおすすめです。', 'Delicate gold rims to elevate the table — a lovely gift.', '식탁을 한층 격조 있게 만드는 섬세한 골드 테두리. 선물로도 추천합니다.'),
    arrived: '2026-09-07',
  },
  {
    id: 'EF-24026', brand: 'gucci', category: 'other', sub: 'cushion', price: 88_000, condition: 'N',
    name: L('GG ジャカード クッション', 'GG Jacquard Cushion', 'GG 자카드 쿠션'),
    material: L('ウール、コットン', 'Wool, cotton', '울, 코튼'), color: L('ベージュ／グレー', 'Beige/Grey', '베이지/그레이'),
    size: '45 × 45 cm', accessories: L('箱', 'Box', '박스'),
    description: L('リビングにさりげなくブランドの気配を添えるクッション。', 'A cushion that brings a quiet note of the house to your living room.', '거실에 은은하게 브랜드의 분위기를 더해 주는 쿠션.'),
    arrived: '2026-09-04',
  },
  {
    id: 'EF-24027', brand: 'hermes', category: 'other', sub: 'linen', price: 118_000, condition: 'N',
    name: L('ビーチタオル', 'Beach Towel', '비치 타월'),
    material: L('コットン100%', '100% cotton', '코튼 100%'), color: L('ホワイト／ブルー', 'White/Blue', '화이트/블루'),
    size: '150 × 90 cm', accessories: L('箱', 'Box', '박스'),
    description: L('ふっくらとしたパイル地。リゾートやバスタイムを上質に。', 'Plush terry for elevated resort days and bath time.', '도톰한 파일 소재. 리조트와 욕실에서의 시간을 한층 고급스럽게.'),
    arrived: '2026-09-03',
  },
  {
    id: 'EF-24028', brand: 'burberry', category: 'other', sub: 'linen', price: 145_000, condition: 'S',
    name: L('カシミア チェック ブランケット', 'Cashmere Check Blanket', '캐시미어 체크 블랭킷'),
    material: L('カシミア100%', '100% cashmere', '캐시미어 100%'), color: L('アーカイブベージュ', 'Archive beige', '아카이브 베이지'),
    size: '200 × 140 cm', accessories: L('なし', 'None', '없음'),
    description: L('軽く暖かなカシミア。ソファに掛けるだけで空間が華やぎます。', 'Light, warm cashmere that transforms any sofa.', '가볍고 따뜻한 캐시미어. 소파에 걸쳐 두기만 해도 공간이 화사해집니다.'),
    arrived: '2026-09-01',
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug)!;
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;
export const isNew = (p: Product) => p.condition === 'N';
export const byNewest = (a: Product, b: Product) => b.arrived.localeCompare(a.arrived);
