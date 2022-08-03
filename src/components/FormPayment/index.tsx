import { useState } from 'react'
import { useCoffee } from '../../hooks/useCoffee'
import { PaymentMethodTypes } from '../../reducers/cart/actions'
import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MoneyIcon,
} from '../Icons'
import { PaymentMethodButton } from '../PaymentMethodButton'
import { FormHeader, FormMethods, FormPaymentContainer } from './styles'

export function FormPayment() {
  const { selectPaymentMethod, coffeeState } = useCoffee()

  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState<PaymentMethodTypes>(coffeeState.paymentMethodSelected ?? '')

  function handleSelectPaymentMethod(paymentMethodType: PaymentMethodTypes) {
    setPaymentMethodSelected(paymentMethodType)
    selectPaymentMethod(paymentMethodType)
  }

  return (
    <FormPaymentContainer>
      <FormHeader>
        <CurrencyDollarIcon />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormHeader>
      <FormMethods>
        <PaymentMethodButton
          active={paymentMethodSelected === PaymentMethodTypes.CREDIT_CARD}
          icon={<CreditCardIcon />}
          label="Cartão de crédito"
          onSelectPaymentMethod={() =>
            handleSelectPaymentMethod(PaymentMethodTypes.CREDIT_CARD)
          }
        />

        <PaymentMethodButton
          active={paymentMethodSelected === PaymentMethodTypes.DEBIT_CARD}
          icon={<BankIcon />}
          label="Cartão de débito"
          onSelectPaymentMethod={() =>
            handleSelectPaymentMethod(PaymentMethodTypes.DEBIT_CARD)
          }
        />

        <PaymentMethodButton
          active={paymentMethodSelected === PaymentMethodTypes.MONEY}
          icon={<MoneyIcon />}
          label="Dinheiro"
          onSelectPaymentMethod={() =>
            handleSelectPaymentMethod(PaymentMethodTypes.MONEY)
          }
        />
      </FormMethods>
    </FormPaymentContainer>
  )
}
