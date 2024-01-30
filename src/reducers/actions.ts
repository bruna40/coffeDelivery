import { Item } from './reducer'

export enum ActionsType {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  CHECK_COFFEE = 'CHECK_COFFEE',
}

export type Actions =
  | {
      type: ActionsType.ADD_COFFEE
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionsType.INCREMENT_COFFEE
        | ActionsType.DECREMENT_COFFEE
        | ActionsType.REMOVE_COFFEE
      payload: {
        itemId: Item['id']
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

export function incrementCoffeAction(itemId: Item['id']) {
  return {
    type: ActionsType.INCREMENT_COFFEE,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementCoffeAction(itemId: Item['id']) {
  return {
    type: ActionsType.DECREMENT_COFFEE,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function removeCoffeAction(itemId: Item['id']) {
  return {
    type: ActionsType.REMOVE_COFFEE,
    payload: {
      itemId,
    },
  } satisfies Actions
}
