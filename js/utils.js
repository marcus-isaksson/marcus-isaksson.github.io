async function loadJSON(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return await res.json();
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

function byId(id) { return document.getElementById(id); }

function setYearAndTitle(settings) {
  const y = new Date().getFullYear();
  const yearEl = byId('year');
  const footTitle = byId('footerTitle');
  if (yearEl) yearEl.textContent = String(y);
  if (footTitle) footTitle.textContent = settings?.siteTitle || '';
  const siteTitleA = byId('siteTitle');
  if (siteTitleA) siteTitleA.textContent = settings?.siteTitle || siteTitleA.textContent;
}

function sortByOrderAndTitle(arr) {
  return [...arr].sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || String(a.title).localeCompare(String(b.title)));
}

function currentQuery() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

function setAriaCurrent(navEl, slug) {
  if (!navEl) return;
  for (const a of navEl.querySelectorAll('a')) {
    const s = a.getAttribute('data-slug');
    if (s === slug) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }
}

window.SiteUtils = { loadJSON, el, byId, setYearAndTitle, sortByOrderAndTitle, currentQuery, setAriaCurrent };

