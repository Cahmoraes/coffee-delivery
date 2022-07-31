import { ICoffee } from '../../contexts/CoffeeContext'

export enum ActionTypes {
  'INCREASE_QUANTITY' = 'INCREASE_QUANTITY',
  'DECREASE_QUANTITY' = 'DECREASE_QUANTITY'
}

export const increaseQuantityAction = (payload: ICoffee) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload
})

export const decreaseQuantityAction = (payload: ICoffee) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload
})
