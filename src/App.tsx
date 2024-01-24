import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeProvider } from './Context/Coffe'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
