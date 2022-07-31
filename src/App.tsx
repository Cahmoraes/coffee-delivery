import { BrowserRouter } from 'react-router-dom'
import { CoffeeProvider } from './contexts/CoffeeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <Router />
      </CoffeeProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}
