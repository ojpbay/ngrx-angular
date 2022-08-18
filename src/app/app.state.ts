import { createSelector } from '@ngrx/store';
import { Hero } from './heroes/models/hero';

export interface AppState {
  readonly heroes: Hero[];
}

const heroFeature = (state: AppState) => state.heroes;

const selectHeroesCount = () =>
  createSelector(heroFeature, (state) => state.length);

export const HeroSelectors = {
  selectHeroesCount,
};
