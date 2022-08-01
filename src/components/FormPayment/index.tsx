import { CurrencyDollarIcon } from '../Icons'
import { FormHeader, FormPaymentContainer } from './styles'

export function FormPayment() {
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
    </FormPaymentContainer>
  )
}
