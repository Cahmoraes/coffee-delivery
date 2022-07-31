import { ICoffee } from '../../contexts/CoffeeContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface IInicialState {
  catalogProducts: ICoffee[]
  cartProducts: ICoffee[]
}

export function cartReducer(state: IInicialState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREASE_QUANTITY: {
      const productToIncreaseAmount = action.payload.name

      const existsProductInCartIndex = state.cartProducts.findIndex(
        (product) => product.name === productToIncreaseAmount,
      )

      return produce(state, (draft) => {
        const productIndex = draft.catalogProducts.findIndex(
          (product) => product.name === productToIncreaseAmount,
        )

        if (productIndex > -1) {
          draft.catalogProducts[productIndex].amount += 1
        }

        if (existsProductInCartIndex > -1) {
          draft.cartProducts[existsProductInCartIndex].amount += 1
        } else {
          draft.cartProducts.push(action.payload)
        }
      })
    }
    case ActionTypes.DECREASE_QUANTITY: {
      console.log(action)
      const productToDecreaseAmount = action.payload.name

      const existsProductInCartIndex = state.cartProducts.findIndex(
        (product) => product.name === productToDecreaseAmount,
      )

      return produce(state, (draft) => {
        const productIndex = draft.catalogProducts.findIndex(
          (product) => product.name === productToDecreaseAmount,
        )

        if (productIndex > -1) {
          if (draft.catalogProducts[productIndex].amount > 0) {
            draft.catalogProducts[productIndex].amount -= 1
          } else {
            draft.catalogProducts[productIndex].amount = 0
          }
        }

        if (existsProductInCartIndex > -1) {
          if (draft.cartProducts[existsProductInCartIndex].amount > 0) {
            draft.cartProducts[existsProductInCartIndex].amount -= 1
          } else {
            draft.cartProducts.splice(existsProductInCartIndex, 1)
          }
        }
      })
    }
    default:
      return state
  }
}
