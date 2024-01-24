import { createContext } from 'react'

interface CoffeContext {}

interface CoffeContextProviderProps {
  children: React.ReactNode
}

export const CoffeContext = createContext({} as CoffeContext)

export function CoffeProvider({ children }: CoffeContextProviderProps) {
  return <CoffeContext.Provider value={{}}>{children}</CoffeContext.Provider>
}
