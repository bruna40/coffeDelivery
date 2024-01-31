import { produce } from 'immer'
import { Actions, ActionsType } from './actions'
import { NewOrderFormData } from '../pages/Checkout'

export interface Item {
  id: string
  quantityCoffee: number
}
export interface OrderForm extends NewOrderFormData {
  id: number
  items: Item[]
}

interface OrderState {
  orders: OrderForm[]
  cart: Item[]
}

export function cartReducer(state: OrderState, action: Actions) {
  switch (action.type) {
    case ActionsType.ADD_COFFEE:
      return produce(state, (draftState) => {
        const itemAdd = draftState.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAdd) {
          itemAdd.quantityCoffee += action.payload.item.quantityCoffee
        } else {
          draftState.cart.push(action.payload.item)
        }
      })

    case ActionsType.INCREMENT_COFFEE:
      return produce(state, (draftState) => {
        const coffee = draftState.cart.find(
          (coffee) => coffee.id === action.payload.itemId,
        )
        if (coffee?.id) coffee.quantityCoffee += 1
      })
    case ActionsType.DECREMENT_COFFEE:
      return produce(state, (draftState) => {
        const coffee = draftState.cart.find(
          (coffee) => coffee.id === action.payload.itemId,
        )
        if (coffee?.id && coffee.quantityCoffee > 1) coffee.quantityCoffee -= 1
      })

    case ActionsType.REMOVE_COFFEE:
      return produce(state, (draftState) => {
        const deleteItem = draftState.cart.findIndex(
          (coffee) => coffee.id !== action.payload.itemId,
        )

        draftState.cart.splice(deleteItem, 1)
      })
    case ActionsType.CHECK_COFFEE:
      return produce(state, (draftState) => {
        const newOrder = {
          ...action.payload.order,
          id: new Date().getTime(),
          items: draftState.cart,
        }
        draftState.orders.push(newOrder)
        draftState.cart = []

        action.payload.callback(`/order/${newOrder.id}/sucess`)
      })
    default:
      return state
  }
}
