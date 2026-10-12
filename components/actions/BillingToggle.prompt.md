Monthly / Yearly switch on pricing — pair with a price that rolls (out up, in from below, 0.6s Settle).
```jsx
const [v, setV] = React.useState('monthly');
<BillingToggle value={v} onChange={setV} />
```
