import { useCoffee } from '../../hooks/useCoffee'
import { ItemCount } from '../ItemCount'
import { SummaryContainer, ProductList, ProductItem } from './styles'

export function Summary() {
  const { coffeeState, removeProductItemFromCart } = useCoffee()

  return (
    <SummaryContainer>
      <h3>Cafés selecionados</h3>

      <ProductList>
        {coffeeState?.cartProducts.map((product) => (
          <ProductItem key={product.name}>
            <img src={product.img_url} alt={product.name} />
            <div>
              <span>{product.name}</span>
              <ItemCount productItem={product} />
            </div>
            <button onClick={() => removeProductItemFromCart(product)}>
              Remover
            </button>
          </ProductItem>
        ))}
      </ProductList>
    </SummaryContainer>
  )
}
