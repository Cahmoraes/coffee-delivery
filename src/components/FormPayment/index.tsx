import { useState } from 'react'
import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MoneyIcon,
} from '../Icons'
import { PaymentMethodButton } from '../PaymentMethodButton'
import { FormHeader, FormMethods, FormPaymentContainer } from './styles'

export function FormPayment() {
  const [paymentMethodSelected, setPaymentMethodSelected] = useState<
    number | null
  >(null)

  function handleSelectPaymentMethod(paymentMethodId: number) {
    setPaymentMethodSelected(paymentMethodId)
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
          active={paymentMethodSelected === 0}
          icon={<CreditCardIcon />}
          label="Cartão de crédito"
          onSelectPaymentMethod={() => handleSelectPaymentMethod(0)}
        />

        <PaymentMethodButton
          active={paymentMethodSelected === 1}
          icon={<BankIcon />}
          label="Cartão de débito"
          onSelectPaymentMethod={() => handleSelectPaymentMethod(1)}
        />

        <PaymentMethodButton
          active={paymentMethodSelected === 2}
          icon={<MoneyIcon />}
          label="Dinheiro"
          onSelectPaymentMethod={() => handleSelectPaymentMethod(2)}
        />
      </FormMethods>
    </FormPaymentContainer>
  )
}
