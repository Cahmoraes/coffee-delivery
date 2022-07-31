import { useNavigate } from 'react-router-dom'
import { ShopCartIcon } from '../Icons'
import { CartButtonContainer } from './styles'

export function CartButton() {
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  return (
    <CartButtonContainer onClick={handleNavigateToCheckout}>
      <ShopCartIcon />
    </CartButtonContainer>
  )
}
