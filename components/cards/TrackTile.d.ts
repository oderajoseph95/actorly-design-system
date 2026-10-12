export interface TrackTileProps {
  title: string;
  was: string;
  now: string;
  /** Ember ring, old value struck through, new value revealed. */
  changed?: boolean;
}
export declare function TrackTile(props: TrackTileProps): JSX.Element;
