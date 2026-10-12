export interface HistoryRowProps {
  item: string;
  /** e.g. "price $129.00 → $89.00" */
  change: string;
  who: string;
  /** Leave empty for "Unknown" — the who text still renders at full strength. */
  sure?: 'likely' | 'possible' | null;
  when: string;
  /** Ember flash fading over 1.4s. */
  fresh?: boolean;
}
export declare function HistoryRow(props: HistoryRowProps): JSX.Element;
