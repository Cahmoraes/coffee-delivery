import { createContext, ReactNode, useCallback, useReducer } from 'react'
import {
  decreaseQuantityAction,
  increaseQuantityAction,
  removeProductCartAction,
} from '../reducers/cart/actions'
import { cartReducer, IInicialState } from '../reducers/cart/reducer'
import { Categories, coffeeList as seeders } from './seeders'

export interface ICoffee {
  amount: number
  img_url: string
  categories: Categories[]
  name: string
  description: string
  value: number
  formatted_value: string
}

interface CoffeeContextData {
  coffeeState: IInicialState
  increaseProdutoAmount: (product: ICoffee) => void
  decreaseProductAmount: (product: ICoffee) => void
  removeProductItemFromCart: (product: ICoffee) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    cartReducer,
    {
      catalogProducts: [] as ICoffee[],
      cartProducts: [] as ICoffee[],
    },
    (initialState) => {
      return {
        ...initialState,
        catalogProducts: seeders.map((product) => ({
          ...product,
          amount: 0,
          formatted_value: product.value.toFixed(2),
        })),
      }
    },
  )

  const increaseProdutoAmount = useCallback((product: ICoffee) => {
    dispatch(increaseQuantityAction(product))
  }, [])

  const decreaseProductAmount = useCallback((product: ICoffee) => {
    dispatch(decreaseQuantityAction(product))
  }, [])

  const removeProductItemFromCart = useCallback((product: ICoffee) => {
    dispatch(removeProductCartAction(product))
  }, [])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeState,
        increaseProdutoAmount,
        decreaseProductAmount,
        removeProductItemFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
