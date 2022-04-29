import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app.state"
import {RemoveHero} from "../../actions/hero-action";

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.scss']
})
export class ReadDeleteComponent implements OnInit {

  heroes: Observable<Hero[]>

  constructor(private store: Store<AppState>) {
    this.heroes = store.select("heroes")
  }

  deleteHero(indexOfHeroToBeRemoved: number) {
    this.store.dispatch(new RemoveHero(indexOfHeroToBeRemoved))
  }

  ngOnInit(): void {
  }

  trackBy(index: number, hero: Hero) {
    return hero?.id ?? undefined;
  }
}
