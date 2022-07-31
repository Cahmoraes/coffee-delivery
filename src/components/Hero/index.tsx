import { HeroContainer, Badges } from './styles'
import heroImg from '../../assets/images/hero.svg'
import { BadgeIcon } from '../BadgeIcon'
import {
  CoffeeFillIcon,
  PackageFillIcon,
  ShopCartIcon,
  TimerFillIcon,
} from '../Icons'

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <Badges>
          <BadgeIcon
            variant="yellow-dark"
            element={<ShopCartIcon />}
            text="Compra simples e segura"
          />

          <BadgeIcon
            variant="base"
            element={<PackageFillIcon />}
            text="Embalagem mantém o café intacto"
          />

          <BadgeIcon
            variant="yellow"
            element={<TimerFillIcon />}
            text="Entrega rápida e rastreada"
          />

          <BadgeIcon
            variant="purple"
            element={<CoffeeFillIcon />}
            text="O café chega fresquinho até você"
          />
        </Badges>
      </div>
      <div>
        <img src={heroImg} alt="Copo de café" />
      </div>
    </HeroContainer>
  )
}
