import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, HeroSelectors } from '../../../app.state';
import { RemoveHero } from '../../actions/hero-action';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.scss'],
})
export class ReadDeleteComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroCount$: Observable<number>;
  test$: Observable<any>;

  constructor(private readonly store: Store<AppState>) {
    this.heroes$ = this.store.select(HeroSelectors.selectHeroes());
    this.heroCount$ = this.store.select(HeroSelectors.selectHeroesCount());

    this.test$ = this.store.select('heroes')
  }

  ngOnInit(): void {

  }

  deleteHero(indexOfHeroToBeRemoved: number) {
    this.store.dispatch(new RemoveHero(indexOfHeroToBeRemoved));
  }

  trackBy(index: number, hero: Hero) {
    return hero?.id ?? undefined;
  }
}
