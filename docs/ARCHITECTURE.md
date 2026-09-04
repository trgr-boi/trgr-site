# Architecture

---

## File Map

```
trgr-site/
├── index.html              # SPA shell: header, nav, <main id="content">
├── linktree.html           # Standalone linktree (not part of SPA)
├── CNAME                   # GitHub Pages domain → www.trgrboi.be
├── pages/                  # Content fragments, injected into #content
│   ├── home.html
│   ├── linktree.html
│   ├── about-me.html
│   ├── about-page.html
│   ├── proj_blog.html
│   ├── proj_notes.html
│   └── !TEMPLATE-note.html # Template for new notes
├── src/
│   ├── css/
│   │   ├── style.css       # Layout, header/nav/main, theme vars
│   │   ├── note-style.css  # Styling for .note content fragments
│   │   ├── linktree.css    # Standalone linktree page only
│   │   └── fonts.css       # @font-face declarations
│   ├── js/
│   │   ├── change-page.js  # loadContent(page) — SPA core
│   │   ├── theme.js        # toggleTheme() / loadTheme()
│   │   ├── menu.js         # Nav collapse, 820px breakpoint
│   │   └── shortcuts.js    # Global N / T key handlers
│   ├── fonts/              # Self-hosted .ttf files
│   └── img/
└── .github/workflows/
    └── deploy.yml          # GitHub Actions deploy
```

---

## SPA Data Flow

```
nav click ──► href="#about-me" ──► location.hash = "about-me"
                                          │ hashchange event
                                          ▼
change-page.js :: loadFromHash() ──► loadContent("about-me")
                                          │ fetch("pages/about-me.html")
                                          ▼
                document.getElementById("content").innerHTML = html
```

- **Rule: hash = filename without `.html`** → `#home` loads `pages/home.html`
- Hash is the single source of truth — no `onclick`, links are plain `href`s
- Back/forward, refresh and bookmarks all work (`hashchange` + initial load)
- Empty hash defaults to `home`; failed fetch shows "Page not found."

## Theming

```
CSS vars:  --background-color / --foreground-color  (gruvbox)
Toggle:    theme.js  →  inline <html> style override
Persist:   localStorage("theme")   default = dark
```

---

## Design System

| Token | Value |
|---|---|
| Colors | `#1e2021` bg / `#ebdbb2` fg (dark) — inverted for light |
| Border | `2px solid var(--foreground-color)` |
| Nav font | `"pixel"` (PixelOperator) |
| Content font | `"nerd"` (AnonymousPro), 17px |
| Base font size | 1.5rem |
| Mobile breakpoint | 820px (nav collapses) |

---

## Deploy Pipeline

```
push to main ──► GitHub Actions (deploy.yml)
                   │  rm -rf .github .gitignore
                   ▼
                 peaceiris/actions-gh-pages
                   │  publish_dir: .
                   ▼
                 gh-pages branch ──► GitHub Pages ──► www.trgrboi.be
```

| Setting | Value |
|---|---|
| Trigger | Push to `main` + manual `workflow_dispatch` |
| Target | `gh-pages` branch |
| Cleanup before publish | `.github/`, `.gitignore` removed |

---

## Adding a New Page

1. Copy `pages/!TEMPLATE-note.html` → `pages/<name>.html`
2. Edit content inside `<section class="note">`
3. Add nav link in `index.html` (hash must match filename):
   ```html
   <a href="#<name>"><p>Title</p></a>
   ```
