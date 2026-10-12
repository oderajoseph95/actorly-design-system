export interface BillingToggleProps {
  value?: 'monthly' | 'yearly';
  onChange?: (v: 'monthly' | 'yearly') => void;
}
export declare function BillingToggle(props: BillingToggleProps): JSX.Element;
