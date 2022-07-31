import { MapPinLineIcon } from '../Icons'
import { FormDeliveryContainer, Form, FormHeader } from './styles'

export function FormDelivery() {
  return (
    <FormDeliveryContainer>
      <h3>Complete seu pedido</h3>
      <Form>
        <FormHeader>
          <MapPinLineIcon />
          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
      </Form>
    </FormDeliveryContainer>
  )
}
