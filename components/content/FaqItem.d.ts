export interface FaqItemProps {
  q: string;
  a: React.ReactNode;
  /** Adds the bottom rule to close a stack. */
  last?: boolean;
  open?: boolean;
}
export declare function FaqItem(props: FaqItemProps): JSX.Element;
