# Decisions

## D-2: Home brand cards — pill-only website link + swipe carousel on phones (supersedes D-1)
Date: 2026-11-21    Model: Claude Opus 5.5
Context:    Client found the whole-card link unwanted, and it covered the mobile arrows so they stopped working.
Options:    1) Keep whole-card link, raise arrows above it  2) "Visit website" pill only; native CSS scroll-snap row (~1.5 cards visible) below lg, grid on lg+  3) JS carousel library
Chosen:     2
Why:        Client asked for it; scroll-snap gives native swipe with no new dependency, and one card markup now serves phone and desktop.
Trade-off:  Wrap-around is arrow-only (swiping stops at the ends); hover text stays hidden on touch until a card is tapped.
Revisit if: Client wants auto-play or infinite swipe.

## D-1: Brand cards link to brand websites via whole-card click + "Visit website" pill
Date: 2026-11-21    Model: Claude Opus 5.5
Context:    Client wants each brand card on the home page to lead to that brand's own website, alongside MENU and BOOK A TABLE.
Options:    1) Whole card is a link, plus a small "Visit website ↗" pill in the corner  2) Third WEBSITE button under MENU/BOOK  3) Pill only
Chosen:     1
Why:        Gives both behaviours the client asked for without crowding the two booking buttons; a real <a> works with keyboard and screen readers.
Trade-off:  On phones, tapping the photo now leaves the page (before it did nothing). Dr Sheesha has no Indian site (drsheesha.com is Dubai), so its card is not clickable.
Revisit if: Analytics show accidental exits from the home page, or Dr Sheesha Chennai gets its own website.
