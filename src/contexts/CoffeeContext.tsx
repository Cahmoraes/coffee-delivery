import { createContext, ReactNode, useCallback, useReducer } from 'react'
import {
  decreaseQuantityAction,
  increaseQuantityAction,
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
      console.log('aqui')
      console.log(initialState)
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

  return (
    <CoffeeContext.Provider
      value={{
        coffeeState,
        increaseProdutoAmount,
        decreaseProductAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
