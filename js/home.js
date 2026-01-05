/* Home shell: builds nav from pages.json and renders default page (e.g., Projects) */
(async function() {
  const { loadJSON, el, byId, sortByOrderAndTitle, setYearAndTitle, setAriaCurrent } = window.SiteUtils;
  try {
    const [settings, pagesData] = await Promise.all([
      loadJSON('settings.json'),
      loadJSON('pages.json')
    ]);
    setYearAndTitle(settings);

    const pages = sortByOrderAndTitle((pagesData?.pages || []).filter(p => p.visible !== false));
    const nav = byId('siteNav');
    const app = byId('app');
    const defaultSlug = settings?.defaultPage || (pages[0]?.slug ?? 'projects');

    // Build nav
    if (nav) {
      nav.innerHTML = '';
      for (const p of pages) {
        const a = el('a', { href: `#${p.slug}`, 'data-slug': p.slug }, p.title);
        nav.appendChild(a);
      }
    }

    function renderPage(slug) {
      const p = pages.find(x => x.slug === slug) || pages.find(x => x.slug === defaultSlug) || pages[0];
      if (!p) return;
      setAriaCurrent(nav, p.slug);
      if (p.type === 'projects') {
        renderProjects(app);
      } else if (p.type === 'contact') {
        renderContact(app, p);
      } else {
        renderFallback(app, p);
      }
    }

    async function renderProjects(target) {
      target.innerHTML = '';
      const wrap = el('section');
      wrap.appendChild(el('h1', { class: 'section-title' }, 'Projects'));
      const sub = el('p', { class: 'section-sub' }, 'Work in progress');
      wrap.appendChild(sub);
      const grid = el('div', { class: 'projects-grid' });
      wrap.appendChild(grid);
      target.appendChild(wrap);

      const projects = await loadJSON('projects.json');
      const list = sortByOrderAndTitle((projects || []).filter(p => p.visible !== false));
      for (const pr of list) {
        const card = el('a', { class: 'project-card', href: `project.html?slug=${encodeURIComponent(pr.slug)}` });
        const cover = pr.cover || pr.images?.[0];
        if (cover) card.appendChild(el('img', { src: cover, alt: pr.title, loading: 'lazy' }));
        const body = el('div', { class: 'card-body' });
        body.appendChild(el('div', { class: 'title' }, pr.title));
        if (pr.description) body.appendChild(el('div', { class: 'desc' }, pr.description));
        card.appendChild(body);
        grid.appendChild(card);
      }
    }

    function renderContact(target, page) {
      target.innerHTML = '';
      const wrap = el('section');
      wrap.appendChild(el('h1', { class: 'section-title' }, page.title || 'Contact'));
      if (page.contentHtml) {
        const c = el('div');
        c.innerHTML = page.contentHtml;
        wrap.appendChild(c);
      } else {
        wrap.appendChild(el('p', {}, 'Add contact content in pages.json (contentHtml).'));
      }
      target.appendChild(wrap);
    }

    function renderFallback(target, page) {
      target.innerHTML = '';
      const wrap = el('section');
      wrap.appendChild(el('h1', { class: 'section-title' }, page.title || 'Page'));
      wrap.appendChild(el('p', { class: 'section-sub' }, 'This page type is not configured.'));
      target.appendChild(wrap);
    }

    function onHashChange() {
      const slug = (location.hash || '').replace(/^#/, '') || defaultSlug;
      renderPage(slug);
    }

    window.addEventListener('hashchange', onHashChange);
    if (!location.hash) location.hash = `#${defaultSlug}`; else onHashChange();
  } catch (err) {
    console.error('Failed to init home:', err);
  }
})();
