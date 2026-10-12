# Copy and claims

This is the design side's summary of how Actorly sounds and which claims are allowed. It is not a source of facts. What is true about the product comes from the product team's own facts (the coverage table, the plans and the data and privacy statements), and a design file never overrides them. When the product changes, the copy changes in the same release, never before.

If a sentence in a page specimen under `ui_kits/` disagrees with this file, this file wins, and the specimen is out of date.

## Where facts come from

- **What is tracked:** the product's coverage table. Quote the count from that table, never a typed number. The table lists every kind of record with what is tracked, when changes appear, whether the old value is kept, whether who made it is shown and whether it can be put back. Some rows say "Not yet" and some say "Not possible"; both stay visible.
- **What can be restored:** the product's restore allowlist. A restore changes one field of one record. Name only fields on that list. At the time of writing they are a product's title, status, vendor, type, description, theme template and tags; a variant's price; a collection's title, description and sort order; a location's name; a market's name; a file's alt text; a shipping profile's name. Confirm against the table before you quote it.
- **Plans and prices:** the product's pricing facts. Copy the plan names and numbers exactly; never reword, round or discount them. Prices belong to the company.
- **Data, privacy and who else handles data:** the product team's data and privacy facts. The published privacy policy, terms and data processing agreement are written and approved by the company, not by design.
- **Anything not yet true** stays out until the product team says it is true (see "Don't say").

## Say

- "Change history".
- "The old value and the new value" (not "diff").
- "Who made it, when Shopify reports it", for product changes, always next to how sure Actorly is.
- The confidence words are a closed set: **Likely**, **Possible** and **Unknown**, plus two waiting states, **Not attributed yet** and **Investigating**. Use "Unknown" when there is no match or when Shopify records nobody for that kind of change. Unknown is never upgraded later.
- "Put select fields back", "one field at a time", "checked after every restore".
- "A restore checks first. If a check before the write fails, nothing is changed." If the check after the write cannot confirm the value, Actorly says so and asks you to look at the field in Shopify.
- Counts quoted from the coverage table, and numbers over adjectives. Example figures are labelled "Example store".
- Timing words for correlation: "followed", "around the same time as", "matched".

## Don't say

- **"Confirmed" as a confidence.** Actorly never produces it. Every match is a correlation of Shopify's activity log with the change, so the highest level is "Likely".
- **"One-click restore":** a restore has a confirm step.
- **"See who made every change":** the public claim is for product changes, when Shopify reports it. On some other kinds a name may be shown with Possible or Likely; where Shopify records nobody, Actorly says Unknown. Do not widen the claim beyond what the coverage table says.
- **"Store activity log":** that is Shopify's own feature name.
- **Sales, revenue, causes or "insights".** Actorly has no sales data. Banned words in change copy: caused, because of, resulted in, led to, due to, definitely, proves that.
- **Features that are not built:** email alerts, Slack alerts, bulk restore, point-in-time restore, restore of a whole store, inventory restore, restoring orders or customers, bringing back deleted items. Alerts sent to an address you control exist for the paid plan but are not yet proven end to end, so do not advertise them.
- **"Every", "all", "permanent"** about what is recorded. Some kinds are "Not yet" or "Not possible", and eight kinds that Shopify sends no change notice for appear only at the next scheduled check.
- **"Forever" or "never expires" for history.** Watch keeps about 3 months. Restore keeps history for as long as you stay on Restore and keep Actorly installed. History is removed after an uninstall, and on a move from Restore to Watch anything older than 90 days is deleted after 14 days' notice.
- **"Trial".** Watch is free, with no clock.
- **"Available on the Shopify App Store", "Install free on Shopify", store badges, ratings, "trusted by", merchant counts, quotes and logos** until the listing exists and the company approves each one. "Actorly is live" and launch dates stay out the same way.
- **"Built for Shopify"** and anything that means the same ("meets Built for Shopify requirements"). It is a badge Shopify awards.
- **Speed claims** such as "within seconds" or "set up in under a minute", unless a measurement exists.
- **"SOC 2", "ISO 27001", "GDPR certified", "compliant"** as a status. No certification is claimed.
- **"21 languages"** until each translation has had a native read.
- **Anything negative about Shopify or a competitor.**

## Plans (copy exactly; the company owns them)

- **Actorly Watch, $0:** free, no trial and no countdown. Three months of change history (90 days). One restore a month (a calendar month), on basic details only. Restoring a product's status, a variant's price or a collection's sort order is a Restore feature. Search, filters, old and new values, who made it with its confidence, and the coverage page are included.
- **Actorly Restore, $29 a month or $240 a year:** everything in Watch, unlimited restores one field at a time, history kept for as long as you stay on Restore and keep Actorly installed, and export to CSV or JSON. Compute any yearly saving from the two prices; do not type it.
- Billed by Shopify on the usual invoice; change plan or cancel in the Shopify admin. Never priced per change.
- Seeing is free; fixing costs. Who made it is the same on both plans.
- Pages, blogs, articles, menus, URL redirects, price lists, policies and files are re-read on a schedule because Shopify sends no change notice for them: weekly on Watch, daily on Restore. It is a freshness difference, never a withheld fact.

## Data and privacy

- **Customer details are stored.** Actorly stores some personal details about a store's customers when they appear in a change it records: a customer's name (for a customer with no name, Shopify supplies their email address as the name, so that email address is stored), whether a customer agreed to email or text marketing, a customer's default address and the shipping and billing addresses on an order, including the phone numbers on them, and the notes on a customer, an order or a draft order. It does not otherwise fetch a customer's account email address or phone number. Never write that Actorly reads or stores no customer data.
- **Permissions.** The app asks for read access to customers, customer merges and orders (among others) and has been approved by Shopify for the protected customer fields. Writes happen only during a restore the merchant confirmed.
- **What is removed.** The saved copy of each notification Shopify sends has customer personal details removed before it is stored.
- **Who else receives data.** Three companies: Cloudflare (hosting and storage), PostHog (product event counts about Actorly itself, only when switched on) and Slack (operational notices for the Actorly team). PostHog and Slack receive no customer data and no store content. Shopify is the platform Actorly runs inside and the source of the data; it is not listed as a subprocessor.
- **Uninstall.** Shopify sends a deletion request 48 hours later, and Actorly then removes the store's history, saved evidence and account records. Reinstalling within those 48 hours keeps everything.
- **Privacy requests from Shopify.** An erasure request for a customer or a store is carried out automatically. A request for a customer's data is shown to the store owner, who downloads a copy of what Actorly holds about that customer from the app and replies.
- **Encryption.** Say "Cloudflare encrypts it". It is Cloudflare's own statement. TLS is used on every connection.
- **Company details** (postal address, jurisdiction, governing law, effective dates, response times) are the company's to state. Leave them as placeholders in a specimen.
