# Live vs refreshed comparison

Compared 2026-09-27.

Live: `https://www.eatrepeatindia.com` (Hostinger).
Refreshed: local production preview `http://127.0.0.1:4173` (`vite build` + `vite preview`).

Rendered titles, descriptions, canonicals and H1s were read in a browser after JavaScript. HTTP status was read from the preview server. No page sends a robots `noindex` tag.

Pass means: the same URL returns 200 locally, the H1 wording is unchanged, the canonical still points at `https://www.eatrepeatindia.com` with the live slash style, and the title and description are either unchanged or the intended edit below.

| Page | Status local | Live title | Refreshed title | Live description | Refreshed description | Canonical | H1 | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Eat Repeat – Crafting Memorable Food Experiences in Bengaluru | Eat Repeat – Crafting Memorable Food Experiences in Bengaluru | Eat Repeat is a Bengaluru-based hospitality group nurturing vibrant food brands — Stories, Macaw, Moai, Dr Sheesha, The Black Pearl and more. Restaurants, breweries and lounges built to be loved and remembered. | Eat Repeat is a Bengaluru hospitality group. Its food brands — Stories, Macaw, Moai, Dr Sheesha and The Black Pearl — include restaurants, breweries and lounges. | https://www.eatrepeatindia.com/ | Crafting memorable food experiences | Pass |
| `/about-us` | 200 | About Us \| Eat Repeat | About Us \| Eat Repeat Hospitality Group, Bengaluru | Eat Repeat builds food brands with stories, soul and community. Learn what we believe, the standards behind every brand we nurture, and how we partner with entrepreneurs and communities. | Eat Repeat builds food brands with stories, soul and community in Bengaluru. What we believe, the standards behind each brand, and how we partner with entrepreneurs. | https://www.eatrepeatindia.com/about-us | About Us | Pass |
| `/core-team` | 200 | Leadership Team \| Eat Repeat | Leadership Team \| Eat Repeat Hospitality, Bengaluru | Meet the leadership behind Eat Repeat — Chairman & CEO Nerall Bakhai and the directors driving operations, finance, purchase, infrastructure and strategy across our F&B brands. | Meet the leadership behind Eat Repeat in Bengaluru — Chairman & CEO Nerall Bakhai and the directors of operations, finance, purchase, infrastructure and strategy. | https://www.eatrepeatindia.com/core-team | Meet The Team | Pass |
| `/contact` | 200 | Contact Us \| Eat Repeat | Contact Us \| Eat Repeat in J. P. Nagar, Bengaluru | Get in touch with Eat Repeat for partnerships, collaborations and conversations. Visit us in J. P. Nagar, Bengaluru, or write to us — we'd love to hear from you. | Contact Eat Repeat in J. P. Nagar, Bengaluru for partnerships and collaborations. Visit the office or write to us — we'd love to hear from you. | https://www.eatrepeatindia.com/contact | Let's Connect | Pass |
| `/brands` | 200 | Our Brands \| Eat Repeat (in-app only; direct live request is 301 then 403) | Our Brands \| Eat Repeat Restaurants in Bengaluru | Explore Eat Repeat's portfolio of dining brands in Bengaluru — Stories Bar & Kitchen, Stories Brewery & Kitchen, Macaw, Moai, Dr Sheesha and The Black Pearl. Fine dining, breweries, lounges and more. | Explore Eat Repeat's dining brands in Bengaluru — Stories Bar & Kitchen, Stories Brewery & Kitchen, Macaw, Moai, Dr Sheesha and The Black Pearl. | https://www.eatrepeatindia.com/brands | Our Brands | Pass |
| `/awards` | 200 | Awards & Recognitions \| Eat Repeat (in-app only; direct live request is 301 then 403) | Awards & Recognitions \| Eat Repeat in Bengaluru | Awards and recognitions earned by Eat Repeat's restaurants and lounges — a testament to our commitment to hospitality, innovation and guest experience across Bengaluru. | Awards and recognitions earned by Eat Repeat's restaurants and lounges in Bengaluru — a testament to our hospitality, innovation and guest experience. | https://www.eatrepeatindia.com/awards | Our Awards & Recognitions | Pass |

`/brands/` and `/awards/` also return 200 locally and render the same pages. Canonical stays without the trailing slash.

Internal links on the refreshed pages (`/`, `/brands`, `/about-us`, `/core-team`, `/awards`, `/contact`) all point at those routes or at `mailto:marketing@eatrepeatindia.com` or `https://theflauxmedia.in`. Sampled images, the logo, award files, `og-image.jpg`, favicon, manifest, `robots.txt` and `sitemap.xml` returned 200 on the preview server.

## Not a fail, but not proven on Hostinger yet

Vite preview does not run Apache. Locally `/brands` and `/awards` already return the app. On the live Hostinger site a direct request is still 301 → 403 because `public/brands/` and `public/awards/` are real folders. `public/.htaccess` now rewrites those two page URLs to `index.html` while leaving files such as `/brands/macaw.png` alone. That rule only takes effect after this branch is deployed. Image URLs were checked locally and still return 200.

## What a visitor would notice

- The browser tab title is longer on About, Brands, Leadership, Contact and Awards. The homepage tab title is the same. The words on the page, including every H1, are the same.
- The homepage logo row’s screen-reader name for one logo changed from “The Black Perl” to “The Black Pearl”, matching the name used everywhere else. The logo image is unchanged.
- Keyboard focus draws an orange outline on links and buttons.
- A direct visit to `/brands` or `/awards` will show the page after deploy, instead of Hostinger’s 403. Until then, those URLs still fail on the live site. Clicking the menu still works today, as it did before.
- Nothing else in the layout, menu, addresses, hours, brand names or form destination was changed. The contact form still opens a mail draft to `marketingeatrepeatindia@gmail.com`. The address shown on the page is still `marketing@eatrepeatindia.com`.
