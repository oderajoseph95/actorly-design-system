/**
 * Pricing plan card. Watch = white; Restore = featured ink.
 */
export interface PlanCardProps {
  name: string;
  description?: string;
  /** e.g. "$0", "$29" */
  price: string;
  unit?: string;
  /** Ink card with ember checks and an inverse CTA. */
  featured?: boolean;
  cta: string;
  href?: string;
  groups?: { label: string; items: (string | { t: string; sub?: string })[] }[];
}
export declare function PlanCard(props: PlanCardProps): JSX.Element;
