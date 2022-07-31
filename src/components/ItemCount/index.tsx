import { ICoffee } from '../../contexts/CoffeeContext'
import { useCoffee } from '../../hooks/useCoffee'
import { MinusIcon, PlusIcon } from '../Icons'
import { ItemCountContainer } from './styles'

interface ItemCountProps {
  productItem: ICoffee
}

export function ItemCount({ productItem }: ItemCountProps) {
  const { decreaseProductAmount, increaseProdutoAmount } = useCoffee()
  return (
    <ItemCountContainer>
      <button onClick={() => decreaseProductAmount(productItem)}>
        <MinusIcon />
      </button>
      <span>{productItem.amount}</span>
      <button onClick={() => increaseProdutoAmount(productItem)}>
        <PlusIcon />
      </button>
    </ItemCountContainer>
  )
}
