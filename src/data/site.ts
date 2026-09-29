import type { Lang } from '../i18n/ui';

/* 店舗・会社情報。〔 〕の部分は実際の情報に差し替えてください。 */
export const site = {
  name: 'Erfoltier',
  kana: 'エルフォルティエ',
  email: 'contact@erfoltier.com',
  instagram: 'https://www.instagram.com/erfoltier/',
  instagramHandle: '@erfoltier',
  company: {
    name: { ja: '〔会社名〕', en: '[Company name]', ko: '[회사명]' },
    rep: { ja: '〔代表者名〕', en: '[Representative]', ko: '[대표자명]' },
    address: { ja: '〒〔郵便番号〕 〔所在地〕', en: '[Address], Japan', ko: '[소재지], 일본' },
    license: { ja: '〔都道府県〕公安委員会 第〔番号〕号', en: '[Prefecture] Public Safety Commission No. [number]', ko: '[도도부현] 공안위원회 제[번호]호' },
  },
} as const;

export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faq: Record<Lang, FaqGroup[]> = {
  ja: [
    {
      title: '商品について',
      items: [
        { q: '新品と中古品の両方を扱っていますか？', a: 'はい。新品（未使用品）と中古品の両方を取り扱っております。商品一覧では「新品」「中古」で絞り込みができ、各商品ページにも区分を明記しています。' },
        { q: '取り扱い商品はすべて本物ですか？', a: 'はい。すべての商品は専任鑑定士による真贋鑑定を経て販売しております。万が一、正規品でないと判明した場合は、商品代金・送料を含めて全額返金いたします。' },
        { q: 'コンディションランクの基準を教えてください。', a: 'N（新品・未使用品）、S（未使用に近い極めて良好な状態）、A（使用感が少なく状態の良いもの）、AB（多少の使用感はあるが比較的良好なもの）、B（使用感・スレ等があるもの）の5段階で表記しています。各商品ページには状態の詳細も記載しております。' },
        { q: '実物を見ることはできますか？', a: 'ご来店での確認をご希望の場合は、事前にお問い合わせフォームよりご予約ください。追加のお写真のご依頼も承ります。' },
      ],
    },
    {
      title: 'ご注文・お支払いについて',
      items: [
        { q: '支払い方法は何がありますか？', a: 'クレジットカード（VISA / Mastercard / JCB / AMEX）、銀行振込、代金引換に対応予定です。' },
        { q: '注文後のキャンセルはできますか？', a: '発送前であればキャンセルを承ります。お早めにお問い合わせフォームよりご連絡ください。' },
      ],
    },
    {
      title: '配送・返品について',
      items: [
        { q: '送料はかかりますか？', a: '国内配送は全品送料無料です。平日14時までのご注文確定で、最短翌営業日に発送いたします。' },
        { q: '海外への発送は可能ですか？', a: '韓国・アメリカなど一部の国・地域への発送に対応しています。送料と関税はお客様のご負担となります。' },
        { q: '返品はできますか？', a: '商品到着後7日以内、未使用の状態であれば返品を承ります。記載のない不具合があった場合は、送料当店負担にて対応いたします。' },
      ],
    },
  ],
  en: [
    {
      title: 'About our items',
      items: [
        { q: 'Do you sell both new and pre-owned items?', a: 'Yes. We carry both brand-new (unused) and pre-owned pieces. You can filter by “New” or “Pre-owned” on the product list, and every product page states which it is.' },
        { q: 'Are all items authentic?', a: 'Yes. Every item is authenticated by our in-house specialists before it is listed. If an item is ever found not to be genuine, we will refund the full amount including shipping.' },
        { q: 'How do your condition grades work?', a: 'We use five grades: N (new/unused), S (near-mint), A (excellent, light signs of use), AB (very good, some signs of use) and B (good, visible wear). Each product page includes detailed condition notes.' },
        { q: 'Can I see an item in person?', a: 'Viewings are by appointment — please book through the contact form. We are also happy to send additional photos.' },
      ],
    },
    {
      title: 'Orders & payment',
      items: [
        { q: 'Which payment methods do you accept?', a: 'We plan to accept major credit cards (VISA / Mastercard / JCB / AMEX) and bank transfer.' },
        { q: 'Can I cancel my order?', a: 'Orders can be cancelled any time before shipping. Please contact us as soon as possible.' },
      ],
    },
    {
      title: 'Shipping & returns',
      items: [
        { q: 'Do you charge for shipping?', a: 'Shipping within Japan is free on every order. Orders confirmed by 2 pm JST on business days ship as early as the next business day.' },
        { q: 'Do you ship internationally?', a: 'We ship to selected countries and regions, including Korea and the United States. International shipping fees and import duties are the customer’s responsibility.' },
        { q: 'Can I return an item?', a: 'Unused items may be returned within 7 days of delivery. If an item has an undisclosed defect, we will cover return shipping.' },
      ],
    },
  ],
  ko: [
    {
      title: '상품 안내',
      items: [
        { q: '새 상품과 중고 상품을 모두 판매하나요?', a: '네. 새 상품(미사용)과 중고 상품을 모두 취급합니다. 전체 상품 페이지에서 ‘새 상품’, ‘중고’로 필터링할 수 있으며, 각 상품 페이지에도 구분을 명시하고 있습니다.' },
        { q: '모든 상품이 정품인가요?', a: '네. 모든 상품은 전문 감정사의 진품 감정을 거쳐 판매됩니다. 만일 정품이 아닌 것으로 판명될 경우, 상품 대금과 배송비를 포함해 전액 환불해 드립니다.' },
        { q: '컨디션 등급 기준을 알려 주세요.', a: 'N(새 상품·미사용), S(미사용에 가까운 매우 좋은 상태), A(사용감이 적고 상태가 좋은 상품), AB(약간의 사용감은 있으나 비교적 양호한 상품), B(사용감·스크래치 등이 있는 상품)의 5단계로 표기합니다. 각 상품 페이지에 상세한 상태 설명이 있습니다.' },
        { q: '실물을 볼 수 있나요?', a: '매장 방문을 원하시면 문의 양식으로 사전 예약해 주세요. 추가 사진 요청도 가능합니다.' },
      ],
    },
    {
      title: '주문·결제 안내',
      items: [
        { q: '결제 방법은 무엇이 있나요?', a: '신용카드(VISA / Mastercard / JCB / AMEX)와 계좌이체를 지원할 예정입니다.' },
        { q: '주문 후 취소할 수 있나요?', a: '발송 전이라면 취소가 가능합니다. 가능한 한 빨리 문의 양식으로 연락해 주세요.' },
      ],
    },
    {
      title: '배송·반품 안내',
      items: [
        { q: '해외 배송이 가능한가요?', a: '한국, 미국 등 일부 국가·지역으로 배송이 가능합니다. 해외 배송비와 관세는 고객님 부담입니다.' },
        { q: '배송 기간은 얼마나 걸리나요?', a: '일본 시간 기준 평일 오후 2시까지 주문이 확정되면 빠르면 다음 영업일에 발송합니다. 한국까지는 보통 발송 후 3~5일 정도 소요됩니다.' },
        { q: '반품할 수 있나요?', a: '상품 수령 후 7일 이내, 미사용 상태라면 반품이 가능합니다. 기재되지 않은 하자가 있는 경우 반품 배송비는 당사가 부담합니다.' },
      ],
    },
  ],
};
