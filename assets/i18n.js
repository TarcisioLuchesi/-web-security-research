/* Poystick language switcher — English default, Portuguese mirrored at /pt-br/.
 * No tracking, cookies, external translation service or API keys. */
(() => {
  const scriptNode = document.currentScript;
  if (!scriptNode) return;
  const base = new URL('../', scriptNode.src);
  const pathname = window.location.pathname;
  if (!pathname.startsWith(base.pathname)) return;
  const rel = pathname.slice(base.pathname.length);
  const isPortuguese = rel.startsWith('pt-br/');
  const page = isPortuguese ? rel.slice('pt-br/'.length) : rel;
  const header = document.querySelector('.site-header');
  if (!header) return;

  const hrefFor = language => {
    const target = new URL((language === 'pt-BR' ? 'pt-br/' : '') + page, base);
    target.search = window.location.search;
    target.hash = window.location.hash;
    return target.href;
  };

  const style = document.createElement('style');
  style.textContent = `
    .site-header { flex-wrap: wrap; gap: 10px 16px; }
    .site-header nav { flex: 1 1 300px; }
    .language-select-wrap {
      display: inline-flex; align-items: center; gap: 7px;
      font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
      color: #bdbdbd; white-space: nowrap; margin-left: auto;
    }
    .language-select-wrap select {
      border: 1px solid #454545; border-radius: 3px;
      background: #111; color: #f2f2f2; font: inherit;
      padding: 7px 10px; cursor: pointer; max-width: 150px;
    }
    .language-select-wrap select:focus-visible { outline: 2px solid #7a8cff; outline-offset: 2px; }
  `;
  document.head.appendChild(style);
  const wrapper = document.createElement('label');
  wrapper.className = 'language-select-wrap';
  const label = document.createElement('span');
  label.textContent = isPortuguese ? 'Idioma' : 'Language';
  const select = document.createElement('select');
  select.setAttribute('aria-label', isPortuguese ? 'Selecionar idioma' : 'Choose language');
  [['en', 'English'], ['pt-BR', 'Português (BR)']].forEach(([value, display]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = display;
    select.appendChild(option);
  });
  select.value = isPortuguese ? 'pt-BR' : 'en';
  select.addEventListener('change', () => {
    const destination = hrefFor(select.value);
    window.location.assign(destination);
  });
  wrapper.append(label, select);
  header.appendChild(wrapper);
  document.documentElement.lang = isPortuguese ? 'pt-BR' : 'en';

  [['en', 'en'], ['pt-BR', 'pt-BR']].forEach(([language, hreflang]) => {
    const alternate = document.createElement('link');
    alternate.rel = 'alternate';
    alternate.hreflang = hreflang;
    alternate.href = hrefFor(language);
    document.head.appendChild(alternate);
  });
})();