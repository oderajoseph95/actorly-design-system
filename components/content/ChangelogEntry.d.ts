export interface ChangelogEntryProps {
  date: string;
  /** Feature = ember, Improvement = blue, Coverage = green, Fix = stone. */
  type?: 'Feature' | 'Improvement' | 'Coverage' | 'Fix';
  title: string;
  body?: string;
  plan?: string;
}
export declare function ChangelogEntry(props: ChangelogEntryProps): JSX.Element;
