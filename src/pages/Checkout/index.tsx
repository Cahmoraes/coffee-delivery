import { FormDelivery } from '../../components/FormDelivery'
import { Summary } from '../../components/Summary'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormDelivery />
      <Summary />
    </CheckoutContainer>
  )
}
