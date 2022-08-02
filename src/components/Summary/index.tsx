import { useNavigate } from 'react-router-dom'
import { useCoffee } from '../../hooks/useCoffee'
import { TrashIcon } from '../Icons'
import { ItemCount } from '../ItemCount'
import {
  SummaryContainer,
  ProductList,
  ProductItem,
  RemoveButton,
  SummaryDetails,
  ConfirmCheckoutButton,
} from './styles'

function convertToPriceFromValueAndAmount(value: number, amount: number) {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value * amount)
}

function convertToPrice(orderTotal: number) {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(orderTotal)
}

export function Summary() {
  const { coffeeState, removeProductItemFromCart } = useCoffee()
  const navigate = useNavigate()

  const priceTotal = coffeeState?.cartProducts.reduce(
    (total, product) => total + product.value * product.amount,
    0,
  )

  function handleConfirmOrder() {
    navigate('/coffee-delivery/order-details')
  }

  const priceDelivery = 3.5
  const orderTotal = priceTotal + priceDelivery

  return (
    <SummaryContainer>
      <h3>Cafés selecionados</h3>
      <div className="container">
        <ProductList>
          {coffeeState?.cartProducts.map((product) => (
            <ProductItem key={product.name}>
              <img src={product.img_url} alt={product.name} />
              <div className="content">
                <span>{product.name}</span>
                <div className="actions">
                  <ItemCount productItem={product} />
                  <RemoveButton
                    onClick={() => removeProductItemFromCart(product)}
                  >
                    <TrashIcon />
                    Remover
                  </RemoveButton>
                </div>
              </div>
              <span className="price">
                {convertToPriceFromValueAndAmount(
                  product.value,
                  product.amount,
                )}
              </span>
            </ProductItem>
          ))}
        </ProductList>

        <SummaryDetails>
          <div>
            <span>Total de itens</span>
            <span>{convertToPrice(priceTotal)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{convertToPrice(priceDelivery)}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{convertToPrice(orderTotal)}</span>
          </div>
        </SummaryDetails>

        <ConfirmCheckoutButton onClick={handleConfirmOrder}>
          Confirmar pedido
        </ConfirmCheckoutButton>
      </div>
    </SummaryContainer>
  )
}
