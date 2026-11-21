// Booking, menu and website links per brand. Single place to update when an outlet opens or a link changes.
// Sources: ReserveGo widget sheet (2026-11-21), Flaux HQ websites table, Zomato pages checked 2026-11-21.

export type Outlet = { name: string; reserve?: string; menu?: string };
export type BrandLinks = { website?: string; outlets: Outlet[] };

// source=9 tags the booking as coming from the website channel in ReserveGo.
const reserveGo = (outletId: string) => `https://widget.reservego.co/reserveOutlets/${outletId}?source=9`;
const zomato = (path: string) => `https://www.zomato.com/${path}/menu`;

export const brandLinks: Record<string, BrandLinks> = {
  'stories-bar-kitchen': {
    website: 'https://storiesbarandkitchen.com',
    outlets: [
      { name: 'Rajajinagar', reserve: reserveGo('653e6e8316d6a247600428d4'), menu: zomato('bangalore/stories-bar-kitchen-rajajinagar-bangalore') },
      { name: 'RR Nagar', reserve: reserveGo('653e6e8416d6a2476004292a'), menu: zomato('bangalore/stories-bar-kitchen-rajarajeshwari-nagar-bangalore') },
      { name: 'Nagarbhavi', reserve: reserveGo('653e6e8416d6a2476004295f'), menu: zomato('bangalore/stories-bar-kitchen-nagarbhavi-bangalore') },
      { name: 'HSR Layout', reserve: reserveGo('69bcd9150f2197fb3951dcb3'), menu: zomato('bangalore/stories-bar-kitchen-hsr-bangalore') },
    ],
  },
  'stories-brewery-kitchen': {
    website: 'https://storiesbrewery.com',
    outlets: [
      { name: 'BTM Layout', reserve: reserveGo('653e6e8316d6a2476004286e'), menu: zomato('bangalore/stories-brewery-kitchen-btm-bangalore') },
    ],
  },
  macaw: {
    website: 'https://macawbystoriesindia.com',
    outlets: [
      { name: 'Bengaluru', reserve: reserveGo('64aa45b4c0fd5976db46b060'), menu: zomato('bangalore/macaw-by-stories-bommanahalli-bangalore') },
      { name: 'Chennai', reserve: reserveGo('66adf33263849f246eb22c00'), menu: zomato('chennai/macaw-by-stories-sholinganallur') },
      { name: 'Hyderabad', reserve: reserveGo('6a48ab6db543525d8d8a533d'), menu: zomato('hyderabad/macaw-by-stories-jubilee-hills') },
    ],
  },
  moai: {
    website: 'https://moaiveg.com',
    outlets: [
      { name: 'Jayanagar', reserve: reserveGo('69afcde798e88d0e87a4e9a2'), menu: zomato('bangalore/moai-1-jayanagar-bangalore') },
      { name: 'Koramangala', reserve: reserveGo('6a32359314024824fad52f97'), menu: zomato('bangalore/moai-koramangala-5th-block-bangalore') },
    ],
  },
  fernway: {
    website: 'https://fernwaybystories.com',
    // WHY own-site menu: Fernway has no Zomato listing.
    outlets: [{ name: 'Bengaluru', reserve: reserveGo('69f84d68d1e0f45432ca2e77'), menu: 'https://fernwaybystories.com/menu' }],
  },
  'dr-sheesha': {
    // WHY no website: drsheesha.com is the Dubai lounge; this outlet is Chennai.
    outlets: [{ name: 'Chennai', reserve: reserveGo('69bcd9150f2197fb3951dcb6'), menu: zomato('chennai/dr-sheesha-sholinganallur') }],
  },
  'the-black-pearl': {
    // shortcut: menu only, no website or ReserveGo outlet known; Kadubeesanahalli is the only open Bengaluru outlet on Zomato.
    outlets: [{ name: 'Kadubeesanahalli', menu: zomato('bangalore/the-black-pearl-kadubeesanahalli-bangalore') }],
  },
  'stories-dubai': {
    website: 'https://storiesloungedubai.com',
    outlets: [],
  },
};
