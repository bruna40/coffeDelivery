import { produce } from 'immer'
import { ActionsType } from './actions'
import { NewOrderFormData } from '../pages/Checkout'

export interface Item {
  id: string
  quantity: number
}
export interface OrderForm extends NewOrderFormData {
  id: number
  items: Item[]
}

interface Order {
  orders: OrderForm[]
  cart: Item[]
}

export function cartReducer(state: Order, action: any) {
  switch (action.type) {
    case ActionsType.ADD_COFFEE:
      return produce(state, (draftState) => {
        const itemAdd = draftState.items.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAdd) {
          itemAdd.quantity += action.payload.item.quantity
        } else {
          draftState.items.push(action.payload.item)
        }
      })
    case ActionsType.REMOVE_COFFEE:
      return produce(state, (draftState) => {
        draftState.cart = draftState.cart.filter(
          (coffee) => coffee.id !== action.payload.id,
        )
      })
    case ActionsType.INCREMENT_COFFEE:
      return produce(state, (draftState) => {
        const coffee = draftState.cart.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffee) coffee.quantity++
      })
    case ActionsType.DECREMENT_COFFEE:
      return produce(state, (draftState) => {
        const coffee = draftState.cart.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffee) coffee.quantity--
      })
    case ActionsType.CHECK_COFFEE:
      return produce(state, (draftState) => {
        const coffee = draftState.cart.find(
          (coffee) => coffee.id === action.payload.id,
        )
        if (coffee) coffee.checked = !coffee.checked
      })
    default:
      return state
  }
}
