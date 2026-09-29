// 一点物のブランド品を扱うため、カートは商品IDの集合として保存する（数量なし）
const KEY = 'erfoltier:cart';

function read(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function write(ids: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* storage unavailable (private mode etc.) */
  }
  document.dispatchEvent(new CustomEvent('cart:change', { detail: ids }));
}

export const cart = {
  items: read,
  has: (id: string) => read().includes(id),
  add(id: string) {
    const ids = read();
    if (!ids.includes(id)) write([...ids, id]);
  },
  remove(id: string) {
    write(read().filter((x) => x !== id));
  },
};

function renderCount() {
  const n = read().length;
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
  });
}

function renderButtons() {
  document.querySelectorAll<HTMLButtonElement>('[data-add-to-cart]').forEach((btn) => {
    const inCart = cart.has(btn.dataset.addToCart!);
    btn.setAttribute('aria-pressed', String(inCart));
    const label = btn.querySelector('[data-label]');
    if (label) label.textContent = inCart ? btn.dataset.labelIn! : btn.dataset.labelAdd!;
  });
}

export function initCart() {
  renderCount();
  renderButtons();
  document.addEventListener('cart:change', () => {
    renderCount();
    renderButtons();
  });
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) {
      renderCount();
      renderButtons();
    }
  });
  document.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('[data-add-to-cart]');
    if (!btn) return;
    const id = btn.dataset.addToCart!;
    if (cart.has(id)) {
      window.location.href = btn.dataset.cartUrl!;
    } else {
      cart.add(id);
    }
  });
}
