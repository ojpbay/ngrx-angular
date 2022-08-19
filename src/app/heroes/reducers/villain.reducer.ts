import {Villain} from "../models/villain";
import {ADD_HERO, AddHero, REMOVE_HERO, RemoveHero} from "../actions/hero-action";
import { Action, INIT } from '@ngrx/store';

const initialState : Villain[] = [{
  id: 1,
  name: "Doctor Claw",
  description: "Bad guy from Inspector Gadget",
  lair: "Unknown"
}]

export function heroReducer (state: Villain[] = initialState, action: Action) {
  switch(action.type) {
    case ADD_HERO:
      return [...state, (action as AddHero).heroToBeAdded]  // add a hero
    case REMOVE_HERO:
      const newState = [...state]
      newState.splice((action as RemoveHero).indexOfHeroToBeRemoved,1) // remove a hero
      return newState
    case INIT:
        return initialState
    default:
      // return state
      // or for learning what happens under the hood:
      throw Error(`The action type "${action.type}" is not implemented`)
  }
}
