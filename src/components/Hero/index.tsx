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
          <BadgeIcon variant="yellow-dark" element={<ShopCartIcon />}>
            Compra simples e segura
          </BadgeIcon>

          <BadgeIcon variant="base" element={<PackageFillIcon />}>
            Embalagem mantém o café intacto
          </BadgeIcon>

          <BadgeIcon variant="yellow" element={<TimerFillIcon />}>
            Entrega rápida e rastreada
          </BadgeIcon>

          <BadgeIcon variant="purple" element={<CoffeeFillIcon />}>
            O café chega fresquinho até você
          </BadgeIcon>
        </Badges>
      </div>
      <div>
        <img src={heroImg} alt="Copo de café" />
      </div>
    </HeroContainer>
  )
}
