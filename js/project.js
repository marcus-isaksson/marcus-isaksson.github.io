/* Project page: renders a single project's gallery based on ?slug=... */
(async function() {
  const { loadJSON, el, byId, currentQuery, sortByOrderAndTitle, setYearAndTitle } = window.SiteUtils;
  try {
    const settings = await loadJSON('settings.json');
    setYearAndTitle(settings);
    // Build navigation to match home.html
    try {
      const pagesData = await loadJSON('pages.json');
      const pages = sortByOrderAndTitle((pagesData?.pages || []).filter(p => p.visible !== false));
      const nav = document.getElementById('siteNav');
      if (nav) {
        nav.innerHTML = '';
        for (const p of pages) {
          const a = el('a', { href: `home.html#${p.slug}`, 'data-slug': p.slug }, p.title);
          nav.appendChild(a);
        }
      }
    } catch {}

    const q = currentQuery();
    const slug = q.slug || '';
    const all = await loadJSON('projects.json');
    const projects = sortByOrderAndTitle((all || []).filter(p => p.visible !== false));
    const pr = projects.find(p => p.slug === slug) || projects[0];
    const target = byId('project');
    if (!pr) {
      target.textContent = 'Project not found';
      return;
    }

    const h1 = el('h1', { class: 'section-title' }, pr.title);
    const grid = el('div', { class: 'gallery' });
    for (const src of pr.images || []) {
      const img = el('img', { src, alt: pr.title, loading: 'lazy' });
      grid.appendChild(img);
    }

    target.innerHTML = '';
    target.appendChild(h1);
    if (pr.description) target.appendChild(el('p', { class: 'section-sub' }, pr.description));
    target.appendChild(grid);

    // Lightbox setup
    const images = (pr.images || []).slice();
    if (images.length) enableLightbox(grid, images, pr.title);
  } catch (err) {
    console.error('Failed to render project:', err);
  }
})();

function enableLightbox(grid, images, altTitle) {
  const { el } = window.SiteUtils;
  let index = 0;
  let overlay = null;
  let imgEl = null;
  let keyHandler = null;

  function show(i) {
    index = (i + images.length) % images.length;
    imgEl.src = images[index];
    imgEl.alt = altTitle || 'Photo';
  }

  function open(i) {
    if (!overlay) {
      overlay = el('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true' });
      imgEl = el('img', { class: 'lightbox-img', draggable: 'false' });
      overlay.appendChild(imgEl);
      document.body.appendChild(overlay);
    }
    document.body.classList.add('no-scroll');
    overlay.removeAttribute('aria-hidden');
    show(i);

    overlay.onclick = (e) => {
      // If click is outside the image, close
      const isInsideImg = e.target === imgEl || (e.target.closest && e.target.closest('.lightbox-img'));
      if (!isInsideImg) {
        close();
        return;
      }
      // Click inside image: decide left vs right
      const rect = imgEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x >= rect.width / 2) next(); else prev();
    };

    keyHandler = (e) => {
      if (e.key === 'Escape') return close();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') return next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') return prev();
    };
    window.addEventListener('keydown', keyHandler);
  }

  function close() {
    if (!overlay) return;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (keyHandler) window.removeEventListener('keydown', keyHandler);
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  // Bind clicks on gallery images
  const thumbs = Array.from(grid.querySelectorAll('img'));
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });
}
