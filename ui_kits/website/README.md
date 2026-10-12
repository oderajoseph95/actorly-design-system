# Website page specimens

> **These pages are layout specimens, not the live site.** Their copy is placeholder, written to show spacing, type, colour and motion. Do not copy a sentence, a number, a date or a claim from them. True copy comes from the product's own facts: see `guidelines/copy-and-claims.md`.

Every page is a working Design Component (`.dc.html`: self-contained, inline styles, run by the `support.js` beside it). `index.html` is a tabbed viewer. Open it in a browser; it loads React, ReactDOM and Babel from unpkg.com.

- **Pages:** Home, Coverage, Docs, Blog, Article, Changelog, Security, Contact, Privacy, Terms, DPA, 404, OG Cards, and the site's own Design System page.
- **Shared parts:** `SiteNav.dc.html` (floating 58px glass pill, sheet under 820px), `SiteFooter.dc.html` (badge strip, 4 columns, wordmark sign-off; starts `motion-kit.js` on inner pages), `ActorlyLegal.dc.html` (`doc`: privacy | terms | dpa).
- **Motion:** `motion-kit.js` drives line reveals, fades and pinned scenes. Specs are in `../../guidelines/motion.md`.
- Pages inline literal colour values rather than linking `styles.css`; those values match `tokens/` exactly.
- The Shopify glyph is not included: each install button has an empty slot where it goes (see `../../guidelines/assets.md`).
- Product photos are neutral placeholder blocks.
- The legal pages (Privacy, Terms, DPA) and the Security page carry specimen text. The published policy, terms and agreement are written and approved by the company.
