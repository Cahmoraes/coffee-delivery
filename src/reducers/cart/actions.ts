import { ICoffee, ICostumerAddress } from '../../contexts/CoffeeContext'

export enum ActionTypes {
  'INCREASE_QUANTITY' = 'INCREASE_QUANTITY',
  'DECREASE_QUANTITY' = 'DECREASE_QUANTITY',
  'REMOVE_PRODUCT_CART' = 'REMOVE_PRODUCT_CART',
  'REGISTER_COSTUMER_ADDRESS' = 'REGISTER_COSTUMER_ADDRESS',
  'SELECT_PAYMENT_METHOD' = 'SELECT_PAYMENT_METHOD'
}

export enum PaymentMethodTypes {
  'CREDIT_CARD' = 'Cartão de crédito',
  'DEBIT_CARD' = 'Cartão de débito',
  'MONEY' = 'Dinheiro',
  'EMPTY' = ''
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

export const registerCostumerAddressAction = (payload: ICostumerAddress) => ({
  type: ActionTypes.REGISTER_COSTUMER_ADDRESS,
  payload
})

export const selectPaymentMethodAddressAction = (payload: PaymentMethodTypes) => ({
  type: ActionTypes.SELECT_PAYMENT_METHOD,
  payload
})
