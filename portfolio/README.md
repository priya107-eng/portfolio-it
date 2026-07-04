# Priyadharshini A — Portfolio

A single-page, ATS-friendly developer portfolio built with plain HTML, CSS, and JavaScript (no build step, no framework required).

## File structure

```
portfolio/
├── index.html          # all content + sections
├── css/
│   └── style.css       # design tokens, layout, dark/light theme, animations
├── js/
│   └── script.js       # theme toggle, nav, terminal typing effect, scroll reveal, form
├── assets/
│   └── Priyadharshini_A_Resume.pdf   # served by the "Download Resume" buttons
└── README.md
```

## Run it locally

No build tools needed. Either:

1. **Double-click `index.html`** to open it in a browser, or
2. Serve it properly (recommended, avoids some browser file:// restrictions):
   ```bash
   cd portfolio
   python3 -m http.server 8000
   # visit http://localhost:8000
   ```

## Customize

- **Resume file**: replace `assets/Priyadharshini_A_Resume.pdf` with an updated export any time — the download buttons already point at that filename.
- **Colors/fonts**: everything is driven by CSS custom properties at the top of `css/style.css` (`:root` for light mode, `html[data-theme="dark"]` for dark mode). Change the hex values there to re-theme the whole site.
- **Project links**: the "Code ↗" links on each project card currently point to the GitHub profile (`github.com/priya107-eng`) as a placeholder — swap in the specific repo URL once each project has one, and add a live demo link where available.
- **Contact form**: the form currently opens the visitor's email client via a `mailto:` link (no backend). To collect submissions properly, wire the `<form id="contactForm">` in `index.html` to a service like [Formspree](https://formspree.io/), [Getform](https://getform.io/), or a simple serverless function — replace the JS in `script.js`'s submit handler with a `fetch()` call to that endpoint.

## Deployment

### Vercel
```bash
npm i -g vercel
cd portfolio
vercel
```
Follow the prompts (framework preset: "Other"). Vercel will give you a live URL immediately and redeploy on every push if you connect a GitHub repo.

### Netlify
- **Drag-and-drop**: go to [app.netlify.com/drop](https://app.netlify.com/drop) and drop the `portfolio` folder — it deploys instantly.
- **CLI**:
  ```bash
  npm i -g netlify-cli
  cd portfolio
  netlify deploy --prod
  ```

### GitHub Pages
1. Push this folder to a GitHub repo (e.g. `priya107-eng/portfolio`).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — the site will be live at `https://priya107-eng.github.io/portfolio/` within a minute or two.

## What's implemented

- Sticky, blurred navbar with active-scroll shadow and mobile hamburger menu
- Dark/light theme toggle, persisted in `localStorage`, respects system preference on first visit
- Animated hero with rotating role text and a typing-effect terminal panel
- Skill bars and chip clouds for languages, frameworks, tools, and soft skills
- Project cards with problem statement, tech tags, and code links
- Experience shown as a "commit log" timeline (internships + achievements)
- Scroll-reveal animations via `IntersectionObserver` (skipped automatically for users with `prefers-reduced-motion`)
- Accessible: skip-to-content link, visible focus states, semantic landmarks, alt/aria labels on icons
- SEO: meta description/keywords, Open Graph + Twitter cards, JSON-LD `Person` structured data
- Scroll-to-top button
- Contact form with client-side validation and `mailto:` fallback
- Fully responsive down to small mobile widths

## Suggested enhancements

1. **Real screenshots**: add a screenshot or short screen-recording GIF to each project card once the apps have a UI worth showing — image-driven cards convert better with recruiters than text-only ones.
2. **Live demos**: deploy the Exam Hall Seating Planner and Portfolio Website (both web-based) to Netlify/Vercel and link them directly instead of pointing to the GitHub profile.
3. **Case study pages**: turn 1–2 strongest projects into short dedicated pages (problem → approach → screenshots → what you'd do differently) — this is what separates a resume list from a portfolio.
4. **Blog/notes section**: even 2–3 short posts on what you learned building APTIX or the seating planner signal initiative to recruiters skimming quickly.
5. **Analytics**: add a lightweight, privacy-friendly analytics snippet (e.g. Plausible or GoatCounter) to see which sections recruiters actually spend time on.
6. **Form backend**: connect the contact form to Formspree/Getform (see Customize section) so messages land in your inbox even if the visitor's email client isn't configured.
7. **Custom domain**: point a domain like `priyadharshini.dev` at whichever host you choose — most recruiters skim faster past a branded domain than a `*.vercel.app` one.
8. **Favicon/OG image**: swap the emoji favicon for a small monogram logo, and add a real `assets/og-cover.png` (1200×630) so shared links preview nicely on LinkedIn/WhatsApp.
