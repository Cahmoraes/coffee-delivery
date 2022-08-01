import { useNavigate } from 'react-router-dom'
import { ShopCartIcon } from '../Icons'
import { CartContainer } from './styles'

interface CartProps {
  count?: number
}

export function Cart({ count }: CartProps) {
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/coffee-delivery/checkout')
  }

  return (
    <CartContainer onClick={handleNavigateToCheckout}>
      {Number(count) > 0 && <span className="cart-count">{count}</span>}
      <ShopCartIcon />
    </CartContainer>
  )
}
