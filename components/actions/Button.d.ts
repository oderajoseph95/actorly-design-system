/**
 * Pill-shaped CTA. Labels start with a verb, sentence case.
 */
export interface ButtonProps {
  /** primary = ink→ember on hover; secondary = outline; inverse = ember (ink sections only); secondary-inverse = outline on ink. */
  variant?: 'primary' | 'secondary' | 'inverse' | 'secondary-inverse';
  /** lg 54px · md 48px · sm 42px tall. */
  size?: 'lg' | 'md' | 'sm';
  /** Prepend the Shopify glyph (install buttons). */
  shopify?: boolean;
  href?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
