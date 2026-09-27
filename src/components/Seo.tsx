import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.eatrepeatindia.com';
const SITE_NAME = 'Eat Repeat';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type SeoProps = {
  title: string;
  description: string;
  /** Optional absolute or site-relative OG image */
  image?: string;
  /** Optional extra JSON-LD blocks for this page */
  jsonLd?: Record<string, unknown>[];
};

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Per-route SEO: title, description, canonical, Open Graph,
 * Twitter cards, and optional structured data.
 */
const Seo = ({ title, description, image, jsonLd }: SeoProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    // Page-specific structured data
    const existing = document.head.querySelectorAll('script[data-seo-jsonld]');
    existing.forEach((node) => node.remove());
    (jsonLd || []).forEach((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    });
  }, [title, description, image, jsonLd, pathname]);

  return null;
};

export default Seo;
