import { ICoffee, ICostumerAddress } from '../../contexts/CoffeeContext'
import { ActionTypes, PaymentMethodTypes } from './actions'
import { produce } from 'immer'

export interface IInicialState {
  catalogProducts: ICoffee[]
  cartProducts: ICoffee[]
  customerAddress: ICostumerAddress
  paymentMethodSelected: PaymentMethodTypes
}

interface CartAction {
  type: ActionTypes
  payload: ICoffee | ICostumerAddress | PaymentMethodTypes
}

function instanceOfICoffee(object: Object): object is ICoffee {
  return Reflect.has(object, 'categories')
}

function instanceOfICostumerData(object: Object): object is ICostumerAddress {
  return Reflect.has(object, 'cep')
}

function isPropertyOfPaymentMethodTypes(
  param: any,
): param is PaymentMethodTypes {
  return Object.values(PaymentMethodTypes).includes(param)
}

export function cartReducer(state: IInicialState, action: CartAction) {
  switch (action.type) {
    case ActionTypes.INCREASE_QUANTITY: {
      if (!instanceOfICoffee(action.payload)) return state
      const productToIncreaseAmount = action.payload.name

      const existsProductInCartIndex = state.cartProducts.findIndex(
        (product) => product.name === productToIncreaseAmount,
      )

      return produce(state, (draft) => {
        if (!instanceOfICoffee(action.payload)) return state

        const productIndex = draft.catalogProducts.findIndex(
          (product) => product.name === productToIncreaseAmount,
        )

        if (productIndex > -1) {
          draft.catalogProducts[productIndex].amount += 1
        }

        if (existsProductInCartIndex > -1) {
          draft.cartProducts[existsProductInCartIndex].amount += 1
        } else {
          const newProductItem = {
            ...action.payload,
            amount: action.payload.amount + 1,
          }
          draft.cartProducts.push(newProductItem)
        }
      })
    }
    case ActionTypes.DECREASE_QUANTITY: {
      if (!instanceOfICoffee(action.payload)) return state
      const productToDecreaseAmount = action.payload.name

      const existsProductInCartIndex = state.cartProducts.findIndex(
        (product) => product.name === productToDecreaseAmount,
      )

      return produce(state, (draft) => {
        const productCatalogIndex = draft.catalogProducts.findIndex(
          (product) => product.name === productToDecreaseAmount,
        )

        if (productCatalogIndex > -1) {
          if (draft.catalogProducts[productCatalogIndex].amount - 1 === 0) {
            draft.catalogProducts[productCatalogIndex].amount = 0
            draft.cartProducts.splice(existsProductInCartIndex, 1)
          }

          if (draft.catalogProducts[productCatalogIndex].amount > 0) {
            draft.catalogProducts[productCatalogIndex].amount -= 1
            draft.cartProducts[existsProductInCartIndex].amount -= 1
          }
        }
      })
    }
    case ActionTypes.REMOVE_PRODUCT_CART: {
      if (!instanceOfICoffee(action.payload)) return state
      const productNameToRemoveFromCart = action.payload.name

      const productIndexToRemoveFromCart = state.cartProducts.findIndex(
        (product) => product.name === productNameToRemoveFromCart,
      )

      const productIndexToClearFromCatalog = state.catalogProducts.findIndex(
        (product) => product.name === productNameToRemoveFromCart,
      )

      if (productIndexToRemoveFromCart < 0) return state

      return produce(state, (draft) => {
        draft.cartProducts.splice(productIndexToRemoveFromCart, 1)
        draft.catalogProducts[productIndexToClearFromCatalog].amount = 0
      })
    }
    case ActionTypes.REGISTER_COSTUMER_ADDRESS: {
      return produce(state, (draft) => {
        if (!instanceOfICostumerData(action.payload)) return state
        draft.customerAddress = action.payload
      })
    }
    case ActionTypes.SELECT_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        if (!isPropertyOfPaymentMethodTypes(action.payload)) return state
        draft.paymentMethodSelected = action.payload
      })
    }
    default:
      return state
  }
}
