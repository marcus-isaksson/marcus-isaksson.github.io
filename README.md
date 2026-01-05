Photography Portfolio — JSON‑Driven Static Site
================================================

Overview
--------
- Static site (HTML/CSS/JS) that renders from JSON files.
- No frameworks or build steps — ready for GitHub Pages.
- Add/update projects and pages by editing JSON, not code.

Structure
---------
- `index.html` — Landing (splash) page. Click to enter.
- `home.html` — Main shell with navigation; renders pages from JSON.
- `project.html` — Single project view displaying an image grid.
- `css/styles.css` — Minimal dark, responsive styles.
- `js/*.js` — Vanilla JS for loading JSON and rendering views.
- `assets/photos/...` — Your images grouped into project folders.
- `projects.json` — List of projects with cover + images.
- `pages.json` — Navigation and page definitions.
- `settings.json` — Site title, landing page config, default page.

How to Run Locally
------------------
Just open `index.html` in a browser. For strict CORS policies, you may need to serve files:
- Python: `python -m http.server 8080` then visit `http://localhost:8080/`
- Node: `npx http-server -p 8080`

GitHub Pages
------------
1. Push this folder to a GitHub repo.
2. Enable GitHub Pages (Settings → Pages → Deploy from branch → `main` → `/root`).
3. Visit the Pages URL (or map a custom domain).

Content Editing
---------------
1) Projects — `projects.json`
- Fields: `slug`, `title`, `visible`, `order`, `description`, `cover`, `images`.
- Images must live under `assets/photos/<slug>/`.

Example:
[
  {
    "slug": "my-series",
    "title": "My Series",
    "visible": true,
    "order": 1,
    "description": "Short blurb",
    "cover": "assets/photos/my-series/cover.jpg",
    "images": ["assets/photos/my-series/1.jpg", "assets/photos/my-series/2.jpg"]
  }
]

2) Pages / Navigation — `pages.json`
- Controls nav links and page types.
- Supported types: `projects`, `contact`.

Example:
{
  "pages": [
    { "slug": "projects", "title": "Projects", "type": "projects", "visible": true, "order": 1 },
    { "slug": "contact", "title": "Contact", "type": "contact", "visible": true, "order": 2, "contentHtml": "<p>Email: you@example.com</p>" }
  ]
}

3) Global Settings — `settings.json`
- `siteTitle` — title in header/footer + splash.
- `defaultPage` — which page shows on `home.html` load.
- `landing` — controls splash background, title placement, color, and click target.

Example:
{
  "siteTitle": "My Portfolio",
  "defaultPage": "projects",
  "landing": {
    "titlePosition": "bottom-right",
    "titleColor": "#ffffff",
    "backgroundImage": "assets/photos/my-series/cover.jpg",
    "clickTarget": "home.html",
    "clickToProjectSlug": "my-series"  // optional: overrides clickTarget to open a specific project
  }
}

Tips
----
- Reorder projects by changing `order` in `projects.json`.
- Hide a project or page by setting `visible: false`.
- Add more pages later (e.g., About) by extending `pages.json` with a new `type` or reusing `contact` with HTML.
