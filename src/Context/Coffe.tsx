import { createContext, useReducer } from 'react'
import { Item, OrderForm, cartReducer } from '../reducers/reducer'
import { addCoffeAction } from '../reducers/actions'

interface CoffeContext {
  addCoffe: (item: Item) => void
  handleQuantyCoffeMinus: () => void
  handleQuantyCoffePlus: () => void
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

  function handleQuantyCoffePlus() {
    console.log('teste')
  }

  function handleQuantyCoffeMinus() {
    console.log('teste')
  }

  function removeCoffe() {
    console.log('teste')
  }

  function checkoutCart() {
    console.log('teste')
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
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
