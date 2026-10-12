/**
 * Hand-broken two-line headline + lede. No eyebrow labels.
 */
export interface SectionHeaderProps {
  /** Headline broken by hand where the meaning breaks. Lines end with a full stop. */
  lines: string[];
  lede?: string;
  as?: 'h1' | 'h2';
  align?: 'center' | 'left';
  onInk?: boolean;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
