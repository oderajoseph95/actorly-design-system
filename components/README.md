# Components

These are React components for prototypes and as a reference for production. Each file:
- reads the CSS variables from `styles.css`;
- documents its props in the header comment;
- exports to `window.Actorly.<Name>` (and to `module.exports`).

Load React, then the component files with `<script type="text/babel">`, then link `styles.css`. A live specimen sheet is in `components.card.html`.

## brand/
**Logo** (`size`, `onDark`, `wordmark`, `href`)
- The two-card mark and the lowercase "actorly" wordmark.
- Use it in navs, footers and cards instead of copying the SVG.
- The wordmark is 0.92 × the mark size.
- Never recolour the front card.

## actions/
**Button** (`variant`: primary | secondary | inverse | secondary-inverse; `size`: lg | md | sm; `shopify`; `href`)
- Labels start with a verb. Install buttons set `shopify` and read "Install free" or "Install free on Shopify". Do not show an install button until the app can be installed from its Shopify listing.
- Primary hovers to ember. Use inverse (ember) only on ink sections.

**Pill** (`active`)
- Filter and tab pills (coverage filters, blog categories, changelog types).
- An active pill fills with ink.

**BillingToggle** (`value`, `onChange`)
- Monthly / Yearly · save 31%.
- Pair it with a price that rolls: it slides out up, then in from below (0.6s Settle).

## labels/
**Stamp** (`title`, `meta`, `tilt`)
- The ember change stamp.
- `meta` is always "time · who". Write who as "Name, staff, likely" for product changes only; otherwise "who: unknown".

**StatusChip** (`status`: likely | possible | unknown | yes | some | not-yet | not-possible)
- Covers both who-made-it labels and coverage answers.
- A name always sits next to a chip.
- The chip is inline-block, so a wrapped label stays one shape.

## data/
**WasNow** (`field`, `was`, `now`)
- Before and after chips, inside admin mock-ups and docs.

**HistoryRow** (`item`, `change`, `who`, `sure`, `when`, `fresh`)
- One row of the change history.
- Leave `sure` empty for "Unknown"; the who text renders at full strength, never muted.
- `fresh` flashes ember, fading over 1.4s.

**AdminFrame** (`children`, `maxWidth`)
- A Shopify-admin-looking frame with the dark top bar and search.
- Inside it, use only `--admin-*` colours and the `--font-admin` font.

## cards/
**PlanCard** (`name`, `description`, `price`, `unit`, `featured`, `cta`, `groups`)
- Watch is a white card; Restore is `featured` (ink, ember checks).
- Groups follow the pricing page: "What it records", "Finding things", "History and restores".

**LinkCard** (`href`, `kicker`, `title`, `body`)
- Docs index, related posts.
- On hover, the ring turns into a 1.5px ink ring. Nothing lifts.

**TrackTile** (`title`, `was`, `now`, `changed`)
- A tile from the "Not just products" grid.
- When `changed`: an ember ring, the old value struck through and the new value revealed.

## content/
**SectionHeader** (`lines`, `lede`, `as`, `align`, `onInk`)
- A headline broken by hand into lines, with the motion-kit mask markup, plus a lede.
- No eyebrow labels.

**FaqItem** (`q`, `a`, `last`, `open`)
- `<details>` with a + that turns 45°.
- Start a stack with a top rule; give the last item `last`.

**ChangelogEntry** (`date`, `type`, `title`, `body`, `plan`)
- The type colour is Feature ember, Improvement blue, Coverage green, Fix stone.

**Step** (`n`, `children`, `done`)
- A numbered step: restore steps, getting started.

## Navigation and page templates
These live as working Design Components in `ui_kits/website/`:

**SiteNav.dc.html** (`home`, `current`)
- A floating pill nav.
- Under 820px: a menu button that opens a sheet. Esc closes it.

**SiteFooter.dc.html** (`home`)
- The badge strip, 4 link columns, the wordmark sign-off and the legal lines.
- On inner pages it also starts `motion-kit.js`.

**ActorlyLegal.dc.html** (`doc`: privacy | terms | dpa)
- The template for all three legal pages.

## Not built as components
The homepage scenes (hero, overwrite, tracks, search, How it works, timeline, closing orbit) run as-is in `ui_kits/website/Actorly Home.dc.html`. Their specs are in `guidelines/motion.md`.
