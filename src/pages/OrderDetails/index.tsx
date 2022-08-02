import { useCoffee } from '../../hooks/useCoffee'
import { OrderDetailsContainer } from './styles'

export function OrderDetails() {
  const { coffeeState } = useCoffee()

  const { customerAddress } = coffeeState

  console.log(customerAddress)
  return (
    <OrderDetailsContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
    </OrderDetailsContainer>
  )
}
