import { Hero } from './heroes/models/hero';

export interface AppState {
  readonly heroes: Hero[];
}
