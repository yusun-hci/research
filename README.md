# Research Portfolio

A minimal, static portfolio page (plain HTML/CSS/JS — no build step, no framework)
styled after academic paper-listing pages, with:

- an opening bio/hero section (name, role, bio paragraphs, contact links)
- a list of entries, each with: thumbnail, title, authors (your name highlighted),
  venue tag, topic tags, an expandable **abstract**, and links (PDF / DOI / arXiv /
  Video / Code / Demo)
- a per-type accent color (Paper = violet, Project = coral, Course = teal — edit
  `TYPE_COLORS` in `script.js` to change or add types)
- filter pills to show only one entry type at a time

## Files

- `index.html` — page structure (hero + entries containers, both filled in by JS)
- `style.css` — all styling
- `data.js` — **your content lives here**: edit `PROFILE` for the bio, and the
  `ENTRIES` array to add/remove/change papers, projects, or courses
- `script.js` — renders `data.js` into the hero and cards, handles the abstract
  toggle and the type filter pills
- `thumbs/` — put your thumbnail images here, then reference them in `data.js`
  as `thumbs/yourfile.png`

## Editing your bio

In `data.js`, edit the `PROFILE` object:

```js
const PROFILE = {
  name: "Yu",
  role: "Doctoral Researcher, HCI — University of St. Gallen",
  bio: [
    "First paragraph of your bio...",
    "Second paragraph if you want one..."
  ],
  contacts: {
    email: "mailto:you@example.com",
    scholar: "https://scholar.google.com/...",
    github: "https://github.com/...",
    cv: "https://.../cv.pdf"      // omit any key you don't want shown
  }
};
```

## Editing entries

Each entry in the `ENTRIES` array looks like:

```js
{
  type: "Paper",                 // drives the filter pill AND the accent color
  thumb: "thumbs/example-1.png", // or "" for a plain colored placeholder
  title: "Your Paper Title",
  authors: ["**Yu**", "Coauthor One", "Coauthor Two"],  // ** ** highlights your name
  venue: "CHI '26",
  tags: ["Immersive Tech", "Embodied Perception"],
  abstract: "Full abstract text — hidden behind a 'Read abstract' toggle. Leave as \"\" to hide the toggle entirely.",
  links: {
    pdf: "https://...",
    doi: "https://...",
    arxiv: "https://...",   // omit any key you don't have
    video: "https://..."
  }
}
```

Copy an existing entry, edit the fields, and add/remove `links` keys as needed
(supported: `pdf`, `doi`, `arxiv`, `video`, `code`, `demo`).

## Preview locally

No build tools needed — just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio`, or `<your-username>.github.io` if you
   want it at the root of your GitHub domain).
2. Push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`, then **Save**.
4. Your site goes live in a minute or two at:
   - `https://<your-username>.github.io/<repo-name>/` (normal repo), or
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`)

## Updating later

Whenever you publish something new, add an entry to `data.js`, commit, and push —
the live site updates automatically.
