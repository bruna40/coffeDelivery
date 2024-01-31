import { createContext, useEffect, useReducer } from 'react'
import { Item, OrderForm, cartReducer } from '../reducers/reducer'
import {
  addCoffeAction,
  incrementCoffeAction,
  decrementCoffeAction,
  removeCoffeAction,
  checkCoffeAction,
} from '../reducers/actions'
import { useNavigate } from 'react-router-dom'
import { NewOrderFormData } from '../pages/Checkout'

interface CoffeContext {
  addCoffe: (item: Item) => void
  handleQuantyCoffeMinus: (item: Item['id']) => void
  handleQuantyCoffePlus: (item: Item['id']) => void
  removeCoffe: (item: Item['id']) => void
  finishedCart: (order: NewOrderFormData) => void
  cart: Item[]
  orders: OrderForm[]
}

export const CoffeContext = createContext({} as CoffeContext)

interface CoffeContextProviderProps {
  children: React.ReactNode
}

export function CoffeProvider({ children }: CoffeContextProviderProps) {
  const [OrderState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (OrderState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return OrderState
    },
  )

  const navigate = useNavigate()

  const { cart, orders } = OrderState

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

  function finishedCart(order: NewOrderFormData) {
    dispatch(checkCoffeAction(order, navigate))
  }

  useEffect(() => {
    if (OrderState) {
      localStorage.setItem(
        '@coffee-delivery:cart-state-1.0.0',
        JSON.stringify(OrderState),
      )
    }
  })
  return (
    <CoffeContext.Provider
      value={{
        handleQuantyCoffeMinus,
        handleQuantyCoffePlus,
        addCoffe,
        finishedCart,
        cart,
        orders,
        removeCoffe,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
