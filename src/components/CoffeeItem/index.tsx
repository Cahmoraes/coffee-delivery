import { memo } from 'react'
import { ICoffee } from '../../contexts/CoffeeContext'
import { CartButton } from '../CartButton'
import { MinusIcon, PlusIcon } from '../Icons'
import { ContainerCoffeeItem, PriceContainer, ItemCount } from './styles'

interface CoffeeItemProps {
  coffee: ICoffee
  onIncreaseProduct: (product: ICoffee) => void
  onDecreaseProduct: (product: ICoffee) => void
}

export function CoffeeItemComponent({
  coffee,
  onIncreaseProduct,
  onDecreaseProduct,
}: CoffeeItemProps) {
  return (
    <ContainerCoffeeItem>
      <img src={coffee.img_url} alt={coffee.name} />

      <ul>
        {coffee.categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <PriceContainer>
        <div className="price-info">
          <span>R$</span>
          <span className="price">{coffee.formatted_value}</span>
        </div>

        <ItemCount>
          <button onClick={() => onDecreaseProduct(coffee)}>
            <MinusIcon />
          </button>
          <span>{coffee.amount}</span>
          <button onClick={() => onIncreaseProduct(coffee)}>
            <PlusIcon />
          </button>
        </ItemCount>

        <CartButton />
      </PriceContainer>
    </ContainerCoffeeItem>
  )
}

export const CoffeeItem = memo(CoffeeItemComponent)
