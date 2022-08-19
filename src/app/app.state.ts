import { createSelector } from '@ngrx/store';
import { Hero } from './heroes/models/hero';
import { Villain } from './heroes/models/villain';

export interface AppState {
  readonly heroes: HeroFeatureState;
  readonly villains: VillainFeatureState;
}

export interface HeroFeatureState {
  heroes: Hero[];
}

export interface VillainFeatureState {
  villains: Villain[];
}

const heroFeature = (state: AppState) => state.heroes;

const villainFeature = (state: AppState) => state.villains;

const selectHeroes = () => createSelector(heroFeature, (state) => state.heroes);
const selectHeroesCount = () =>
  createSelector(heroFeature, (state) => state.heroes.length);

export const HeroSelectors = {
  selectHeroes,
  selectHeroesCount,
};

const selectVillains = () =>
  createSelector(villainFeature, (state) => state.villains);
const selectVillainCount = () =>
  createSelector(villainFeature, (state) => state.villains.length);

export const VillainSelectors = {
  selectVillains,
  selectVillainCount,
};
