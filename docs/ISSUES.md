# Issues

Backlog of known bugs and improvements.

---

## Bugs

| # | Severity(/3) | Location | Issue | Fix |
|---|---|---|---|---|
| 2 | 3 | `linktree.html` | Dead link: `../main-site/index.html` doesn't exist | Point to `https://www.trgrboi.be` |
| 3 | 3 | `linktree.html` | Inconsistent blog URL: `blog.trgr.site` vs `blog.trgrboi.be` elsewhere | Standardize on `blog.trgrboi.be` |
| 4 | 2 | `src/css/style.css` | `calc(100% -40px)` — missing space; `header` and `section` render full width | `calc(100% - 40px)` |
| 5 | 2 | `src/css/fonts.css` | `"nerd"` font paths `../../src/fonts/...` resolve wrong from `src/css/` | `../fonts/...` (same as pixel font entries) |
| 6 | 2 | `src/js/change-page.js` | `innerHTML` injection from fetch — fine with static content, fragile if ever dynamic | Keep static, or sanitize if source changes |

---

## Improvements (optional)

| # | Severity | Location | Issue | Fix |
|---|---|---|---|---|
| 7 | 2 | `src/js/shortcuts.js` | Global `N`/`T` keys fire while typing in inputs | Check `event.target` tag before handling |
| 8 | 2 | `src/js/theme.js` | Theme detection compares raw hex string — breaks if casing/format changes | Compare normalized value or track state variable |
| 9 | 1 | `pages/` | Typos: "wathever", "insiration", "oppinions" | Spell-check pass |
| 10 | 1 | `.gitignore` | Stale entries referencing `main-site/`, `trgr-notes/` | Remove stale lines |

## Completed

| # | Severity(/3) | Location | Issue | Fix |
|---|---|---|---|---|
| 1 | 3 | `src/js/change-page.js` | ~~No URL routing — loaded pages aren't bookmarkable, back button doesn't work, refresh loses page~~ **FIXED** — hash routing (`href="#name"` + `hashchange` listener) | Done |