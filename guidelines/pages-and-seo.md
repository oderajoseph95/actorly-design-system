# Pages and SEO

**Every page has:**
- `title`, `description` and `canonical`;
- the OG tags: type, site_name, url, title, description, and image (1200×630);
- `twitter:card` set to `summary_large_image`;
- the favicon (`assets/logos/favicon/favicon.svg`) and an Apple touch icon.

**OG images:**
- They live in `assets/og/` (and `ui_kits/website/og/`), with all content centred so it survives square and rounded crops. The images for Home, What it tracks, Docs, Changelog, Contact, Security and DPA are withdrawn pending re-export and are not in this repository (see assets.md).
- Their source is `ui_kits/website/Actorly OG Cards.dc.html`; edit it and re-export at 1200×630.

| Page | URL | Title | OG |
|---|---|---|---|
| Home | / | Actorly: Store Change History for Shopify | withdrawn, re-export pending |
| What it tracks | /coverage | What Actorly tracks: Shopify change coverage · Actorly | withdrawn, re-export pending |
| Docs | /docs | Docs: how to use Actorly · Actorly | withdrawn, re-export pending |
| Changelog | /changelog | Changelog: what's new in Actorly · Actorly | withdrawn, re-export pending |
| Blog | /blog | Blog: Shopify change history, explained · Actorly | og/blog.png |
| Article | /blog/who-changed-a-product | How to see who changed a product in Shopify · Actorly | og/article.png |
| Security | /security | Security and data · Actorly | withdrawn, re-export pending |
| Privacy | /privacy | Privacy policy · Actorly | og/privacy.png |
| Terms | /terms | Terms of service · Actorly | og/terms.png |
| DPA | /dpa | Data processing agreement · Actorly | withdrawn, re-export pending |
| Contact | /contact | Contact · Actorly | withdrawn, re-export pending |
| 404 | n/a | Page not found · Actorly | noindex |

## Home
1. **Hero (pinned):** a headline about the store's history on the record, broken by hand. The wording is the company's; the specimen headline is a placeholder.
2. "Shopify saves over it. Actorly keeps it."
3. **Not just products** (`#tracks`)
4. Find a change (search by product, field or value)
5. **How it works** (`#how`, pinned)
6. Install before you need it
7. **Pricing** (`#pricing`) with a compare table
8. **FAQ** (`#faq`)
9. **Closing** (`#install`)

Structured data to add:
- `SoftwareApplication`, with offers for Watch ($0) and Restore ($29).
- `FAQPage`, from the 7 questions.

## Coverage
- **Content:**
  - head;
  - filter pills: Everything / Can be put back / Shows who / Has a "not possible";
  - the table, one row per kind of record;
  - "What the answers mean" (6 cards);
  - the confidence ladder (Likely, Possible, Unknown, and the two waiting states; no "Confirmed");
  - ink CTA.
- **Data:** generate the rows from the product's coverage table, the same source as the app listing's coverage table. Never hand-type a row or a count.

## Docs
- **Anchors:** `#start`, `#reading`, `#who`, `#finding`, `#restore`, `#export`, `#plans`, `#trouble`.
- **Layout:** a sticky sidebar and a "Still stuck?" band.
- **Later:** split into `/docs/{slug}` as the docs grow.

## Changelog
- Type filter (Feature / Improvement / Coverage / Fix), then entry cards.
- Production: feed it from release notes, add RSS at `/changelog.xml`, and anchor each entry.

## Blog and Article
- **Blog:** category pills (Investigation / Recovery / Platform), cards with a stamp on each cover, and the newsletter.
- **Article:**
  - breadcrumb, H1, dek, byline and copy link;
  - a "Short answer" box;
  - sections, a table and a blockquote;
  - a sticky sidebar with the contents, a CTA and AI summary links;
  - "Keep reading".
- **Structured data:** `BlogPosting`.
- **Slugs:**
  - who-changed-a-product
  - does-shopify-keep-change-history
  - why-restores-should-be-checked
  - which-app-changed-my-products
  - shopify-store-activity-log-explained
  - install-before-you-need-it

## Security
- 4 promise cards.
- Where it runs.
- Who else handles data: the same list as the DPA (see copy-and-claims.md).
- Keeping and deleting.
- Vulnerability reports to the company's security address.

## Legal (Privacy / Terms / DPA)
- **Layout:** one template: label, H1, lede, meta, numbered contents, clauses anchored `#c-N`, and links to the other two documents.
- **Content:** the specimen text in `ui_kits/website/ActorlyLegal.dc.html` is marked as specimen. The published wording is written by the company and its counsel.

## Contact
- Three route cards, each with mailto and copy.
- "Before you write": 3 answers.

## 404
- A history panel ("Not found / None recorded / Unknown / Nothing to put back") and links to Home, What it tracks, Docs and Contact.

## Sitemap and robots
- **Sitemap:** every page except 404, plus every blog post.
- **robots.txt:** allow all, and reference the sitemap.
