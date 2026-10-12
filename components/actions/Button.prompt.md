Actorly's pill CTA — every call to action on the site; install buttons carry the Shopify glyph.
```jsx
<Button shopify size="lg">Install free on Shopify</Button>
<Button variant="secondary">See how it works</Button>
<Button variant="inverse" shopify>Install free</Button>
```
- Primary hovers ink → ember over 0.2s. Nothing lifts or scales.
- Use `inverse` / `secondary-inverse` only on ink sections.
- Do not show an install button until the app can be installed from its Shopify listing.
