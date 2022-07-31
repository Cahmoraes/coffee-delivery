import { ICoffee } from '../../contexts/CoffeeContext'

export enum ActionTypes {
  'INCREASE_QUANTITY' = 'INCREASE_QUANTITY',
  'DECREASE_QUANTITY' = 'DECREASE_QUANTITY',
  'REMOVE_PRODUCT_CART' = 'REMOVE_PRODUCT_CART'
}

export const increaseQuantityAction = (payload: ICoffee) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload
})

export const decreaseQuantityAction = (payload: ICoffee) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload
})

export const removeProductCartAction = (payload: ICoffee) => ({
  type: ActionTypes.REMOVE_PRODUCT_CART,
  payload
})
