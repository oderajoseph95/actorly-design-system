export interface LogoProps {
  /** Mark size in px. Wordmark is 0.92× this. Default 22. */
  size?: number;
  /** Paper back card + paper wordmark, for ink sections. */
  onDark?: boolean;
  /** Show the lowercase "actorly" wordmark. Default true. */
  wordmark?: boolean;
  href?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
