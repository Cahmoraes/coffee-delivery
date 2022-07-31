import { memo } from 'react'
import { ICoffee } from '../../contexts/CoffeeContext'
import { CartButton } from '../CartButton'
import { ItemCount } from '../ItemCount'
import { ContainerCoffeeItem, PriceContainer } from './styles'

interface CoffeeItemProps {
  coffee: ICoffee
}

export function CoffeeItemComponent({ coffee }: CoffeeItemProps) {
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

        <ItemCount productItem={coffee} />

        <CartButton />
      </PriceContainer>
    </ContainerCoffeeItem>
  )
}

export const CoffeeItem = memo(CoffeeItemComponent)
