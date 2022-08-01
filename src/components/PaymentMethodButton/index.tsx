import { ReactElement } from 'react'
import { PaymentMethodButtonContainer } from './styles'

interface PaymentMethodButtonProps {
  icon: ReactElement
  label: string
  active: boolean
  onSelectPaymentMethod: () => void
}
export function PaymentMethodButton({
  icon,
  label,
  active = false,
  onSelectPaymentMethod,
}: PaymentMethodButtonProps) {
  return (
    <PaymentMethodButtonContainer
      onClick={onSelectPaymentMethod}
      className={`${active ? 'is-active' : ''}`}
    >
      {icon}
      <span>{label}</span>
    </PaymentMethodButtonContainer>
  )
}
