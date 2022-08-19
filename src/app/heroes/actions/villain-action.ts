import { Action } from "@ngrx/store";
import { Villain } from "../models/villain";

export const ADD_VILLAIN = 'ADD_VILLAIN';

export class AddVillain implements Action {
  type: string = ADD_VILLAIN

  constructor(public villainToBeAdded: Villain) {
  }
}

export const REMOVE_VILLAIN = 'REMOVE_VILLAIN';

export class RemoveVillain implements Action {
  type: string = REMOVE_VILLAIN

  constructor(public indexOfVillainToBeRemoved: number) {
  }
}
