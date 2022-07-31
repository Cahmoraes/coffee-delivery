import { useCoffee } from '../../hooks/useCoffee'
import { CoffeeItem } from '../CoffeeItem'
import { ContainerCoffeeList } from './styles'

export function CoffeeList() {
  const { coffeeState } = useCoffee()

  return (
    <ContainerCoffeeList>
      <h3>Nossos cafés</h3>
      <ul>
        {coffeeState?.catalogProducts.map((coffee) => (
          <CoffeeItem key={coffee.name} coffee={coffee} />
        ))}
      </ul>
    </ContainerCoffeeList>
  )
}
