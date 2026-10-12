export interface PillProps {
  /** Active pill fills with ink. */
  active?: boolean;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
}
export declare function Pill(props: PillProps): JSX.Element;
