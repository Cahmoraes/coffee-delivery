import { Link } from 'react-router-dom'
import logoImg from '../../assets/icons/logo.svg'
import { useCoffee } from '../../hooks/useCoffee'
import { Cart } from '../Cart'
import { Location } from '../Location'
import { HeaderContainer } from './styles'

export function Header() {
  const { coffeeState } = useCoffee()
  const totalProductsInCart = coffeeState?.cartProducts.length

  return (
    <HeaderContainer>
      <nav>
        <Link to="/coffee-delivery/">
          <img src={logoImg} alt="Café Delivery" />
        </Link>

        <div className="nav-group">
          <Location location="Porto Alegre, RS" />
          <Cart count={totalProductsInCart} />
        </div>
      </nav>
    </HeaderContainer>
  )
}
