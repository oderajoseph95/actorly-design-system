export interface StatusChipProps {
  /** Who-made-it confidence (likely, possible, unknown) or coverage answer. */
  status?: 'likely' | 'possible' | 'unknown' | 'yes' | 'some' | 'not-yet' | 'not-possible';
  /** Label override. */
  children?: React.ReactNode;
}
export declare function StatusChip(props: StatusChipProps): JSX.Element;
