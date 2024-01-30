import { Item } from './reducer'

export enum ActionsType {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  CHECK_COFFEE = 'CHECK_COFFEE',
}

export type Actions = {
  type: ActionsType.ADD_COFFEE
  payload: {
    item: Item
  }
}

export function addCoffeAction(item: Item) {
  return {
    type: ActionsType.ADD_COFFEE,
    payload: {
      item,
    },
  } satisfies Actions
}
