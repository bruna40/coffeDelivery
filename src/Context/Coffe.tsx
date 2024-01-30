import { createContext, useReducer, useState } from 'react'

interface CoffeContext {
  quantyCoffee: number
  handleQuantyCoffeMinus: () => void
  handleQuantyCoffePlus: () => void
}

interface CoffeContextProviderProps {
  children: React.ReactNode
}

export const CoffeContext = createContext({} as CoffeContext)

export function CoffeProvider({ children }: CoffeContextProviderProps) {
  const [cartCoffe, dispatch] = useReducer((state: any, action: any) => {}, {})
  const [quantyCoffee, setQuantyCoffe] = useState(0)

  function handleQuantyCoffePlus() {
    dispatch()
  }

  function handleQuantyCoffeMinus() {
    dispatch()
  }

  function addCoffe() {
    dispatch()
  }

  function removeCoffe() {
    dispatch()
  }

  function checkoutCart() {
    dispatch()
  }
  return (
    <CoffeContext.Provider
      value={{ quantyCoffee, handleQuantyCoffeMinus, handleQuantyCoffePlus }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
