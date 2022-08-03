import { BadgeIcon } from '../../components/BadgeIcon'
import {
  CurrencyDollarIcon,
  MapPinFillIcon,
  TimerFillIcon,
} from '../../components/Icons'
import { useCoffee } from '../../hooks/useCoffee'
import {
  OrderDetailsContainer,
  MessageConfirm,
  MessageSummary,
  ContainerSummary,
} from './styles'
import backgroundImg from '../../assets/images/background-order-details.svg'

export function OrderDetails() {
  const { coffeeState } = useCoffee()

  const { customerAddress } = coffeeState

  if (!Object.keys(customerAddress).length) return null
  return (
    <OrderDetailsContainer>
      <MessageConfirm>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </MessageConfirm>

      <ContainerSummary>
        <MessageSummary>
          <BadgeIcon variant="purple" element={<MapPinFillIcon />}>
            Entrega em <b>{customerAddress.rua}</b>
            <br />
            {customerAddress.cidade}, {customerAddress.bairro},{' '}
            {customerAddress.complemento} - {customerAddress.uf}
          </BadgeIcon>

          <BadgeIcon variant="yellow" element={<TimerFillIcon />}>
            Previsão de entrega
            <br />
            <b>20 min - 30 min</b>
          </BadgeIcon>

          <BadgeIcon variant="yellow-dark" element={<CurrencyDollarIcon />}>
            Pagamento na entrega
            <br />
            <b>{coffeeState.paymentMethodSelected}</b>
          </BadgeIcon>
        </MessageSummary>

        <img src={backgroundImg} alt="Motoqueiro realizando entrega" />
      </ContainerSummary>
    </OrderDetailsContainer>
  )
}
