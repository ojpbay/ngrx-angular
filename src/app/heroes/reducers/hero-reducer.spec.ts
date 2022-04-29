import { AddHero, RemoveHero } from "../actions/hero-action";
import { Hero } from "../models/hero";
import { heroReducer } from "./hero-reducer";


describe('HeroReducer', () => {
  let initialState: Hero[]
  beforeEach(() => {
    initialState = [
      {id: 1, name: 'FirstHero', description: 'This is the first hero' },
      {id: 2, name: 'SecondHero', description: 'This is the second hero' },
      {id: 3, name: 'ThirdHero', description: 'This is the third hero' }
    ]
  })

  it('called with AddHero action should return a state with the added hero', () =>
    {
      const addedHero = {id: 4, name: 'AddedHero', description: 'This is the added hero' }
      const expectedState = [...initialState, addedHero]
      expect(heroReducer(initialState, new AddHero(addedHero)))
        .toEqual(expectedState)
    }
  )

  it('called with RemoveHero action should return a state with the correct hero deleted', () =>
    {
      const indexOfTheHeroToBeRemoved = 1
      const expectedState = [
        {id: 1, name: 'FirstHero', description: 'This is the first hero' },
        {id: 3, name: 'ThirdHero', description: 'This is the third hero' }
      ]

      expect(heroReducer(initialState, new RemoveHero(indexOfTheHeroToBeRemoved))).toEqual(expectedState)
    }
  )
})
