import { createContext, useReducer } from 'react'
import { Item, OrderForm, cartReducer } from '../reducers/reducer'
import {
  addCoffeAction,
  incrementCoffeAction,
  decrementCoffeAction,
  removeCoffeAction,
} from '../reducers/actions'

interface CoffeContext {
  addCoffe: (item: Item) => void
  handleQuantyCoffeMinus: (item: Item['id']) => void
  handleQuantyCoffePlus: (item: Item['id']) => void
  removeCoffe: (item: Item['id']) => void
  cart: Item[]
  orders: OrderForm[]
}

interface CoffeContextProviderProps {
  children: React.ReactNode
}

export const CoffeContext = createContext({} as CoffeContext)

export function CoffeProvider({ children }: CoffeContextProviderProps) {
  const [coffeState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (coffeState) => {
      return coffeState
    },
  )

  const { cart, orders } = coffeState

  function handleQuantyCoffePlus(ItemId: Item['id']) {
    dispatch(incrementCoffeAction(ItemId))
  }

  function handleQuantyCoffeMinus(ItemId: Item['id']) {
    dispatch(decrementCoffeAction(ItemId))
  }

  function removeCoffe(ItemId: Item['id']) {
    dispatch(removeCoffeAction(ItemId))
  }

  function addCoffe(item: Item) {
    dispatch(addCoffeAction(item))
  }

  return (
    <CoffeContext.Provider
      value={{
        handleQuantyCoffeMinus,
        handleQuantyCoffePlus,
        addCoffe,
        cart,
        orders,
        removeCoffe,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
