# Changelog

All notable changes to this design system are listed here, newest first.

## 2026-10-13: first public version

First public version, taken from the export of the Actorly design tool.

- Tokens: fonts, colors, typography, layout, motion and asset classes behind one `styles.css`.
- Fonts: Archivo and Inter (variable, Latin), each with its SIL Open Font Licence text.
- Logo pack: SVG, PNG, favicons, app icons and avatars; share images for the page types.
- Components: brand, actions, labels, data, cards and content, as JSX with types and usage prompts.
- Guidelines: design system, components, copy and claims, assets, pages and SEO, motion.
- Page specimens under `ui_kits/website/` (layout specimens with placeholder copy).
- `SKILL.md` at the root, so the repository works as a Claude Code skill.

Changes made while preparing the public version:

- Left out: the Shopify glyph images (Shopify's trademark; the install-button specimens show an empty slot), the embedded-app prototype (out of date), seven share images (Home, What it tracks, Docs, Changelog, Contact, Security and DPA; their text did not match the product's facts and is withdrawn until re-exported), the design tool's manifest and lint config, and the file that mapped screens to a source repository.
- Corrected: the copy and claims rules, the legal and security specimen text, the confidence vocabulary (no "Confirmed"), and the stale counts and examples named in `guidelines/copy-and-claims.md`.
- Replaced: four hot-linked stock photographs with neutral placeholder blocks.
- Marked: every page specimen now carries the line "Layout specimen. Placeholder copy, not published Actorly claims. Nothing here is live or can be installed or bought." Example dates and authors replace dated release notes and posts.
- Hardened: the Lenis script loads with a Subresource Integrity hash. The Inter licence text now carries the font's own copyright year (2016).
- Rights: `NOTICE.md` now says the repository is published for reading and for use by the Actorly team and its contractors, with no other licence granted.
- Behaviour: a history row whose who is "Unknown" renders at full strength, not muted.
