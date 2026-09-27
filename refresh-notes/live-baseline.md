# Live baseline — Eat Repeat

Recorded: 2026-09-27, from the live site (not from a local build).

Production domain: `https://www.eatrepeatindia.com`

Confidence: high. The domain is in `index.html`, `src/components/Seo.tsx`, `public/sitemap.xml`, and `public/robots.txt`, and it is the host that answered these requests.

## Stack and hosting

| Item | Value |
| --- | --- |
| Framework | Vite 5 + React 18 + TypeScript SPA (react-router-dom 6, Tailwind CSS 3, shadcn/ui) |
| Package manager | npm (`package-lock.json`). `vercel.json` install command is `npm install`. |
| Node (repo) | `.nvmrc` is `18`. `package.json` engines is `>=18.0.0`. |
| Node (this machine, used for the code baseline) | v24.17.0 |
| Node (live host) | Unknown. The live site is a static upload, so Hostinger is not running Node. |
| Live host | Hostinger hPanel (`platform: hostinger`, `panel: hpanel`, server `hcdn`). Not Vercel. |
| Deploy artifact | Static `dist/` from `vite build`. Live HTML last-modified `Wed, 10 Jun 2026 06:11:23 GMT`, 3935 bytes, matching a Vite index shell. |
| Config present | `vercel.json` (SPA rewrite to `/index.html`, output `dist`), root `.htaccess`, `public/.htaccess` (copied into `dist` by Vite). |
| Tests | None. |

Public routes in code and in the live sitemap:

- `/`
- `/brands`
- `/about-us`
- `/core-team`
- `/contact`
- `/awards`
- catch-all `*` renders the in-app 404 (the server still returns the SPA shell with HTTP 200)

`src/pages/BrandPage.tsx` exists but is not registered in `src/App.tsx`. Footer brand names are in-page links, not separate URLs.

## Redirects

Checked 2026-09-27.

| Request | Result |
| --- | --- |
| `http://eatrepeatindia.com/` | 301 → `https://eatrepeatindia.com/` (200) |
| `http://www.eatrepeatindia.com/` | 301 → `https://www.eatrepeatindia.com/` (200) |
| `https://eatrepeatindia.com/` | 200, no redirect to www |
| `https://www.eatrepeatindia.com/` | 200, no redirect to apex |
| `http://eatrepeatindia.com/about-us` | 301 → `https://eatrepeatindia.com/about-us` (200) |
| `https://www.eatrepeatindia.com/about-us/` | 200 (no slash strip) |
| `https://www.eatrepeatindia.com/contact/` | 200 |
| `https://www.eatrepeatindia.com/core-team/` | 200 |

http → https is a 301. www and non-www both return 200. There is no host canonicalization at the server. Canonical tags use `https://www.eatrepeatindia.com`.

Trailing slash: the sitemap and client canonicals use a trailing slash on `/` only. Other sitemap URLs have no trailing slash. Both slash styles return 200 for routes that are not real directories.

Exception — asset folders collide with page routes:

| Request | Result |
| --- | --- |
| `https://www.eatrepeatindia.com/brands` | 301 → `https://www.eatrepeatindia.com/brands/` |
| `https://www.eatrepeatindia.com/brands/` | **403 Forbidden** |
| `https://www.eatrepeatindia.com/awards` | 301 → `https://www.eatrepeatindia.com/awards/` |
| `https://www.eatrepeatindia.com/awards/` | **403 Forbidden** |

`public/brands/` and `public/awards/` are real directories (logo and award images). Hostinger’s directory slash + “no indexes” rules fire before the SPA rewrite (`RewriteCond %{REQUEST_FILENAME} !-d`). A direct visit, refresh, or crawler request does not get the page. Clicking the in-app link still works, because React Router does not ask the server for the document.

`https://www.eatrepeatindia.com/this-page-should-404` returns HTTP 200 and the SPA shell (no server 404).

## robots.txt

`GET https://www.eatrepeatindia.com/robots.txt` → 200, `text/plain`, 213 bytes, last-modified 2026-06-10.

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://www.eatrepeatindia.com/sitemap.xml
```

No `Disallow`. No `noindex` anywhere in the fetched HTML.

## sitemap.xml

`GET https://www.eatrepeatindia.com/sitemap.xml` → 200, `application/xml`, last-modified 2026-06-10.

| loc | lastmod | changefreq | priority |
| --- | --- | --- | --- |
| https://www.eatrepeatindia.com/ | 2026-06-10 | weekly | 1.0 |
| https://www.eatrepeatindia.com/brands | 2026-06-10 | weekly | 0.9 |
| https://www.eatrepeatindia.com/about-us | 2026-06-10 | monthly | 0.8 |
| https://www.eatrepeatindia.com/core-team | 2026-06-10 | monthly | 0.8 |
| https://www.eatrepeatindia.com/contact | 2026-06-10 | yearly | 0.7 |
| https://www.eatrepeatindia.com/awards | 2026-06-10 | monthly | 0.6 |

## Per-page SEO

This is a client-rendered SPA. The raw document is the same homepage shell on every route that returns the app (no H1 in the HTML). Google and a browser see the tags after `Seo.tsx` runs. Both layers are recorded. Robots meta is absent on every page (pages are indexable).

### Raw HTML (no JavaScript)

Same document (sha256 prefix `74c34fdf5cea`, 3935 bytes) for `/`, `/about-us`, `/core-team`, `/contact`, and an unknown path:

| Field | Value |
| --- | --- |
| HTTP | 200 |
| Title | Eat Repeat - Crafting Memorable Food Experiences |
| Meta description | Eat Repeat nurtures vibrant food brands built to be loved and remembered. From warm local cafés to concept-driven cloud kitchens. |
| Canonical | https://www.eatrepeatindia.com/ |
| H1 | none |
| Robots meta | absent |

`/brands` and `/awards` do not return this shell. See the 403 above. Raw title on those responses is `403 Forbidden`, H1 is `403`, no description, no canonical, no robots meta.

### Rendered DOM (browser, after JavaScript)

In-app navigation was used for `/brands` and `/awards` because a direct request is a 403. The other pages were loaded by URL.

| Page | HTTP (direct) | Title | Meta description | Canonical | H1 | Robots |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Eat Repeat – Crafting Memorable Food Experiences in Bengaluru | Eat Repeat is a Bengaluru-based hospitality group nurturing vibrant food brands — Stories, Macaw, Moai, Dr Sheesha, The Black Pearl and more. Restaurants, breweries and lounges built to be loved and remembered. | https://www.eatrepeatindia.com/ | Crafting memorable food experiences | absent |
| `/about-us` | 200 | About Us \| Eat Repeat | Eat Repeat builds food brands with stories, soul and community. Learn what we believe, the standards behind every brand we nurture, and how we partner with entrepreneurs and communities. | https://www.eatrepeatindia.com/about-us | About Us | absent |
| `/core-team` | 200 | Leadership Team \| Eat Repeat | Meet the leadership behind Eat Repeat — Chairman & CEO Nerall Bakhai and the directors driving operations, finance, purchase, infrastructure and strategy across our F&B brands. | https://www.eatrepeatindia.com/core-team | Meet The Team | absent |
| `/contact` | 200 | Contact Us \| Eat Repeat | Get in touch with Eat Repeat for partnerships, collaborations and conversations. Visit us in J. P. Nagar, Bengaluru, or write to us — we'd love to hear from you. | https://www.eatrepeatindia.com/contact | Let's Connect | absent |
| `/brands` | 301 → 403 | Our Brands \| Eat Repeat (in-app only) | Explore Eat Repeat's portfolio of dining brands in Bengaluru — Stories Bar & Kitchen, Stories Brewery & Kitchen, Macaw, Moai, Dr Sheesha and The Black Pearl. Fine dining, breweries, lounges and more. | https://www.eatrepeatindia.com/brands (in-app only) | Our Brands (in-app only) | absent |
| `/awards` | 301 → 403 | Awards & Recognitions \| Eat Repeat (in-app only) | Awards and recognitions earned by Eat Repeat's restaurants and lounges — a testament to our commitment to hospitality, innovation and guest experience across Bengaluru. | https://www.eatrepeatindia.com/awards (in-app only) | Our Awards & Recognitions (in-app only) | absent |

Homepage rendered title uses an en dash and adds “in Bengaluru”. The raw HTML title uses a hyphen and omits “in Bengaluru”. Crawlers that do not run JavaScript only ever see the homepage title, homepage description, and homepage canonical.

## Code baseline (main, before this refresh)

Commit: `72c9ee1` “Full website revamp”, branch `main`, tracking `origin/main`.

- `npm install`: succeeded (434 packages). npm audit reported 21 vulnerabilities (1 low, 5 moderate, 15 high).
- `npm run lint`: **failed**. ESLint 9.33.0 throws while loading `@typescript-eslint/no-unused-expressions` (`allowShortCircuit` is undefined). First file: `src/components/BrandsMarquee.tsx`.
- `npm run build`: **succeeded**. Vite 5.4.19, warning that Browserslist data is 13 months old, and a Tailwind warning that `duration-[1200ms]` is ambiguous. Output: `dist/index.html` 3.94 kB, CSS 92.51 kB, JS 411.89 kB.
- Tests: none.

## Environment

The source does not read `import.meta.env` or `process.env`. A local production build does not need `.env.local`.

`.env.example` lists no variables. `.gitignore` ignores `.env` and `.env.*` except `.env.example`. `*.local` was already ignored.

## Secrets scan

Working tree and full git history were searched for `.env` files, private keys, AWS-style keys, Google API keys, Stripe-style keys, GitHub tokens, Slack tokens, Mapbox tokens, Supabase URLs, Firebase keys, and password/token assignments.

Nothing committed. No history rewrite. No keys to rotate from this scan.

Public contact emails in source (not secrets): `marketing@eatrepeatindia.com` and `marketingeatrepeatindia@gmail.com`. The contact form is a `mailto:` to the Gmail address. The map on the contact page asks the visitor to paste a Mapbox token; no token is stored in the repo.
