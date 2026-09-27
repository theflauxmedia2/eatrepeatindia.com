# Open ends — Eat Repeat

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] Confirm on Hostinger after deploy that https://www.eatrepeatindia.com/brands and /awards return the page (200) and that /brands/macaw.png still loads — public/.htaccess rewrite is untested on Apache #high #brands #awards
- [ ] ASK: contact form mailto goes to marketingeatrepeatindia@gmail.com while the page and footer show marketing@eatrepeatindia.com — do not change the recipient until the client picks one address #high #contact
- [ ] ASK: white text on the brand orange (#ef7c39) is about 2.8:1 contrast in src/index.css --primary — darkening it changes the logo colour, so it was left as-is #medium #homepage
- [ ] src/components/ContactMap.tsx asks a visitor for a Mapbox token and is not rendered on src/pages/Contact.tsx — remove it or connect a real map only after a public token is provided #low #contact

## SEO
- [ ] ASK: https://eatrepeatindia.com and https://www.eatrepeatindia.com both return 200 with no redirect; canonicals use www — add an apex-to-www redirect only after approval #medium
- [ ] Awards page (src/pages/Awards.tsx) is mostly images; add the real award names in text so the page is not thin #medium #awards
- [ ] src/pages/BrandPage.tsx is not registered in src/App.tsx, so Stories, Macaw, Moai and the other brands have no indexable URL of their own #medium #brands
- [ ] Raw HTML is still one homepage shell for every route (Vite SPA); Google runs JavaScript, but non-JS crawlers only see the homepage title until a prerender is added without creating /brands or /awards folders #medium
- [ ] No Google Analytics or Tag Manager ID is present in index.html — do not add one until the client supplies the ID #medium

## Client inputs needed
- [ ] Confirm which email should receive contact form mail: marketing@eatrepeatindia.com or marketingeatrepeatindia@gmail.com #high #contact
- [ ] Phone number, if they want it public (the page comment says phone was removed on purpose) #medium #contact
- [ ] Social profile URLs (Facebook, Instagram and others are commented out in src/components/Footer.tsx) for footer links and JSON-LD sameAs #medium
- [ ] Per-outlet opening hours (the contact page only lists office hours) for LocalBusiness JSON-LD in index.html #medium #contact
- [ ] Award titles and years for the five images in public/awards/ #medium #awards
- [ ] Logo as SVG (current logo is public/lovable-uploads/bd9a7918-b91d-45a2-a95c-cb3547248741.png) #low
- [ ] Privacy policy and terms copy — neither page exists #medium
- [ ] Google Business Profile access #medium
- [ ] Domain and DNS access for Hostinger, to relink the site to the new GitHub repo without changing the live branch #high

## Features to build
- [ ] ASK before wiring src/pages/BrandPage.tsx into the router — new brand URLs would be new pages, not a change to existing ones #medium #brands

## Content
- [ ] Homepage brand cards still use placeholder area names such as “Downtown Heritage District” and “Tropical Gardens Plaza” in src/components/BrandsCarousel.tsx — replace with the real Bengaluru outlet areas only if the client confirms them #medium #homepage
- [ ] Testimonials are not on the site #low #homepage

## Performance & accessibility
- [ ] ASK before a Vite 5 to Vite 8 upgrade (npm audit high GHSA on the dev server; fix is vite@8.3.1 and needs --force) — live hosting is a static upload, so this does not run on Hostinger #high
- [ ] ASK before React Router 7 (moderate audit on open redirects in react-router 6.30.6; fix is a major) #medium
- [ ] ASK before React 19, Tailwind CSS 4, ESLint 10 or TypeScript 7 — left on React 18.3.1, Tailwind 3.4.19, ESLint 9.39.5 and TypeScript 5.9.3 #low
- [ ] ASK which Node version to pin: .nvmrc is 18, package.json engines is >=18, and this refresh built on Node 24.17.0; Hostinger serves static files and does not show a Node version #medium

## Launch & infra
- [ ] Merge and deploy refresh-2026 after review, with production branch staying main until that merge #high
- [ ] Relink Hostinger (live host) to the new GitHub repo theflauxmedia2/eatrepeatindia-com and keep the production branch as main #high
- [ ] Submit https://www.eatrepeatindia.com/sitemap.xml in Google Search Console and confirm the property is verified #medium
- [ ] Add GA4 only after the client provides the measurement ID — none is in the repo today #medium
- [ ] Test the contact form mailto on a phone and desktop after production deploy #high #contact
- [ ] Set up uptime monitoring for https://www.eatrepeatindia.com #medium
