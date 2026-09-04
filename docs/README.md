# TRGR Site — Project Sheet

> My static personal website · https://www.trgrboi.be

---

## Features

| Feature | Implementation |
|---|---|
| Page navigation | `src/js/change-page.js` — hash routing: `#name` fetches `pages/name.html` into `#content` |
| Dark/light theme | `src/js/theme.js` — gruvbox palette via CSS vars, saved in `localStorage` |
| Collapsible nav | `src/js/menu.js` — hidden below 820px, toggle button |
| Keyboard shortcuts | `src/js/shortcuts.js` — `N` = nav, `T` = theme |
| Custom fonts | `src/css/fonts.css` — self-hosted PixelOperator + AnonymousPro |

---

## Docs

| Doc | Purpose |
|---|---|
| [ARCHITECTURE.md](ARCHITECTURE.md) | File structure, data flow, deploy pipeline |
| [ISSUES.md](ISSUES.md) | Known bugs and improvement backlog |
