/* Landing (splash) page: reads settings.json to render background, title position/color, and click target */
(async function() {
  try {
    const settings = await SiteUtils.loadJSON('settings.json');
    const bg = document.getElementById('splashBg');
    const title = document.getElementById('splashTitle');
    const click = document.getElementById('splashClick');

    const bgImg = settings?.landing?.backgroundImage;
    if (bg && bgImg) bg.style.backgroundImage = `url('${bgImg}')`;

    const pos = String(settings?.landing?.titlePosition || 'center');
    const allowed = new Set([
      'top-left','top-center','top-right',
      'center-left','center','center-right',
      'bottom-left','bottom-center','bottom-right'
    ]);
    const cls = allowed.has(pos) ? `pos-${pos}` : 'pos-center';
    if (title) {
      title.textContent = settings?.siteTitle || 'Photography Portfolio';
      title.classList.add(cls);
      const color = settings?.landing?.titleColor || '#111111';
      title.style.color = color;
    }

    let target = settings?.landing?.clickTarget || 'home.html';
    const projectSlug = settings?.landing?.clickToProjectSlug;
    if (projectSlug && typeof projectSlug === 'string' && projectSlug.trim() !== '') {
      target = `project.html?slug=${encodeURIComponent(projectSlug.trim())}`;
    }
    if (click) {
      click.href = target;
      click.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = target;
      });
    }
  } catch (err) {
    console.error('Failed to render splash:', err);
  }
})();
