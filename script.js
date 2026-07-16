const body = document.body;
const portfolio = document.querySelector('.portfolio');
const gallery = document.querySelector('.gallery');
const enterLink = document.querySelector('[data-enter]');
const exitLinks = document.querySelectorAll('[data-exit]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let transitionTimer;

function finishEntering() {
  body.classList.remove('is-entering');
  body.classList.add('is-work');
  portfolio.focus({ preventScroll: true });
}

function showWork({ updateHistory = true } = {}) {
  if (body.classList.contains('is-work') || body.classList.contains('is-entering')) return;

  window.clearTimeout(transitionTimer);
  window.scrollTo(0, 0);
  body.classList.add('is-entering');

  if (updateHistory) history.pushState({ view: 'work' }, '', '#work');
  transitionTimer = window.setTimeout(finishEntering, reducedMotion.matches ? 0 : 720);
}

function showCover({ updateHistory = true } = {}) {
  window.clearTimeout(transitionTimer);
  body.classList.remove('is-entering', 'is-work');
  window.scrollTo(0, 0);

  if (updateHistory) {
    history.pushState({ view: 'cover' }, '', `${location.pathname}${location.search}`);
  }

  enterLink.focus({ preventScroll: true });
}

enterLink.addEventListener('click', (event) => {
  event.preventDefault();
  showWork();
});

exitLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showCover();
  });
});

window.addEventListener('popstate', () => {
  if (location.hash === '#work') showWork({ updateHistory: false });
  else showCover({ updateHistory: false });
});

if (location.hash === '#work') body.classList.add('is-work');

const viewer = document.querySelector('.viewer');
const viewerImage = viewer.querySelector('.viewer__image');
const viewerCount = viewer.querySelector('.viewer__count');
const closeViewerButton = viewer.querySelector('.viewer__close');
const previousButton = viewer.querySelector('[data-previous]');
const nextButton = viewer.querySelector('[data-next]');
let photos = [];
let activePhoto = 0;

function padNumber(number) {
  return String(number).padStart(2, '0');
}

function renderViewer(index) {
  if (!photos.length) return;

  activePhoto = (index + photos.length) % photos.length;
  const thumbnail = photos[activePhoto].querySelector('img');
  viewerImage.src = thumbnail.currentSrc || thumbnail.src;
  viewerImage.alt = '';
  viewerCount.textContent = `${padNumber(activePhoto + 1)} / ${padNumber(photos.length)}`;
}

function openViewer(index) {
  renderViewer(index);
  body.classList.add('viewer-open');
  if (!viewer.open) viewer.showModal();
  closeViewerButton.focus();
}

function closeViewer() {
  if (!viewer.open) return;

  viewer.close();
  body.classList.remove('viewer-open');
  viewerImage.removeAttribute('src');
  photos[activePhoto]?.focus();
}

closeViewerButton.addEventListener('click', closeViewer);
previousButton.addEventListener('click', () => renderViewer(activePhoto - 1));
nextButton.addEventListener('click', () => renderViewer(activePhoto + 1));

viewer.addEventListener('click', (event) => {
  if (event.target === viewer) closeViewer();
});

viewer.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeViewer();
});

window.addEventListener('keydown', (event) => {
  if (!viewer.open) return;
  if (event.key === 'ArrowLeft') renderViewer(activePhoto - 1);
  if (event.key === 'ArrowRight') renderViewer(activePhoto + 1);
});

const layoutRules = {
  feature: { count: 1, classes: ['gallery-row--feature'] },
  pair: { count: 2, classes: ['gallery-row--pair'] },
  'solo-left': { count: 1, classes: ['gallery-row--solo', 'gallery-row--left'] },
  'solo-right': { count: 1, classes: ['gallery-row--solo', 'gallery-row--right'] },
  triptych: { count: 3, classes: ['gallery-row--triptych'] },
};

function validateGallery(manifest) {
  if (!manifest || !Array.isArray(manifest.rows) || manifest.rows.length === 0) {
    throw new Error('gallery.json must contain at least one row.');
  }

  manifest.rows.forEach((row, rowIndex) => {
    const rule = layoutRules[row.layout];
    if (!rule) throw new Error(`Unknown layout in row ${rowIndex + 1}: ${row.layout}`);
    if (!Array.isArray(row.images) || row.images.length !== rule.count) {
      throw new Error(`${row.layout} row ${rowIndex + 1} needs ${rule.count} image(s).`);
    }

    row.images.forEach((image, imageIndex) => {
      const safeFile = typeof image.file === 'string' && /^[^/\\]+$/.test(image.file);
      const validSize = Number.isFinite(image.width) && image.width > 0
        && Number.isFinite(image.height) && image.height > 0;

      if (!safeFile || !validSize) {
        throw new Error(`Invalid image in row ${rowIndex + 1}, position ${imageIndex + 1}.`);
      }
    });
  });

  return manifest;
}

function createPhoto(image, index) {
  const button = document.createElement('button');
  const thumbnail = document.createElement('img');

  button.className = 'photo';
  button.type = 'button';
  button.setAttribute('aria-label', `Open photograph ${index + 1}`);

  thumbnail.src = `assets/photos/${image.file}`;
  thumbnail.width = image.width;
  thumbnail.height = image.height;
  thumbnail.alt = '';
  thumbnail.decoding = 'async';

  if (index === 0) thumbnail.fetchPriority = 'high';
  else thumbnail.loading = 'lazy';

  button.append(thumbnail);
  return button;
}

function renderGallery(manifest) {
  const fragment = document.createDocumentFragment();
  let photoIndex = 0;

  manifest.rows.forEach((row) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('gallery-row', ...layoutRules[row.layout].classes);

    row.images.forEach((image) => {
      rowElement.append(createPhoto(image, photoIndex));
      photoIndex += 1;
    });

    fragment.append(rowElement);
  });

  gallery.replaceChildren(fragment);
  photos = [...gallery.querySelectorAll('.photo')];
  viewerCount.textContent = `01 / ${padNumber(photos.length)}`;

  photos.forEach((photo, index) => {
    photo.addEventListener('click', () => openViewer(index));
  });
}

function showGalleryError(error) {
  console.error(error);
  const message = document.createElement('p');
  message.className = 'gallery-error';
  message.textContent = 'The photographs could not be loaded.';
  gallery.replaceChildren(message);
}

async function loadGallery() {
  try {
    const response = await fetch('gallery.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`gallery.json returned ${response.status}.`);
    renderGallery(validateGallery(await response.json()));
  } catch (error) {
    showGalleryError(error);
  }
}

loadGallery();
