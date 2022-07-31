import { createContext, ReactNode, useCallback, useReducer } from 'react'
import { cartReducer, IInicialState } from '../reducers/cart/reducer'
import { ICoffee } from './CoffeeContext'

interface CartContextData {
  cartItems: IInicialState[]
  addProductToCart: (product: ICoffee) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

const initialState: IInicialState[] = []

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProductToCart = useCallback((product: ICoffee) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product.name })
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems: state,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
