---
name: actorly-design
description: "Use for any Actorly-branded work: web pages and landing sections, emails, slide decks, social and share images, logos and favicons, UI mock-ups, and any copy that talks about Actorly. Holds the brand tokens (colour, type, layout, motion), the fonts, the logo pack, React components, page specimens and the copy and claims rules. Read it before writing a headline, a claim or a layout for Actorly."
user-invocable: true
---

# Actorly design system

This folder is the whole Actorly design system. It works as a Claude Code skill as it is: the folder that contains this file is the skill.

## How to use it

1. Read `README.md` in this folder first. It is the index and holds the short rules for colour, type, layout, logo and voice.
2. Read `guidelines/copy-and-claims.md` before you write any sentence about what Actorly does, costs, stores or tracks. The design files are not a source of facts: true copy comes from the product's own facts (coverage table, plans, data and privacy facts). When unsure, leave the claim out or write a placeholder and say so.
3. For colour, type, spacing and motion, use the tokens: `styles.css` imports everything in `tokens/`. Never retype a hex value that has a token.
4. For logos, favicons and share images, copy files from `assets/logos/` and `assets/og/`. Do not redraw the mark. The rules for it are in `guidelines/assets.md`.
5. For components (button, stamp, status chip, history row, plan card and more), read `components/README.md`. Each component has a `.jsx` source, a `.d.ts` and a `.prompt.md` with a usage example.
6. For layouts, `ui_kits/website/` holds page specimens. They show structure, spacing and motion. Their copy is placeholder: see `ui_kits/README.md`.
7. For motion, read `motion/MOTION-BRIEF.md` and `guidelines/motion.md`. Only transform and opacity move.

## When you build something

- If you are making a visual artifact (a slide, a mock, a throwaway prototype), copy the assets you need out of this folder and write static HTML the user can open.
- If you are working in production code, copy the tokens and assets you need and follow the rules here.
- If the user invokes this skill with no other guidance, ask what they want to build, ask a few questions, then act as an expert designer who outputs HTML artifacts or production code, whichever the job needs.

## The rules that matter most

- Colour: ink, paper and white build everything. Ember (#FF4A1A) is the single accent. No gradients, no cool greys outside Shopify admin mock-ups.
- Type: Archivo for everything on the brand surface. The wordmark is always lowercase "actorly". Inter only inside Shopify admin mock-ups.
- Voice: plain, specific, calm. Sentence case. Headlines end with a full stop. No eyebrows above headlines, no emoji.
- Honesty is the brand: show "Unknown" rather than guess, never present a correlation as a certainty, never claim a feature that is not built.
- Rights: the Actorly name, logo and brand assets are not open. See `NOTICE.md`.
