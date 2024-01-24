import { createContext, useState } from 'react'

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
  const [quantyCoffee, setQuantyCoffe] = useState(0)

  function handleQuantyCoffePlus() {
    setQuantyCoffe(quantyCoffee + 1)
  }

  function handleQuantyCoffeMinus() {
    if (quantyCoffee > 0) {
      setQuantyCoffe(quantyCoffee - 1)
    }
  }
  return (
    <CoffeContext.Provider
      value={{ quantyCoffee, handleQuantyCoffeMinus, handleQuantyCoffePlus }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
