export interface StampProps {
  /** e.g. "Price $129 → $89" */
  title: string;
  /** Always "time · who", e.g. "2:32 PM · who: unknown". */
  meta?: string;
  /** Rotation in degrees. */
  tilt?: number;
}
export declare function Stamp(props: StampProps): JSX.Element;
