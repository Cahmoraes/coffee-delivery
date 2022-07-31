import { ReactNode } from 'react'
import { BadgeContainer, IconColorsType } from './styles'

interface BadgeIconProps {
  text: string
  element: ReactNode
  variant?: IconColorsType
}

export function BadgeIcon({
  text,
  element: ComponentIcon,
  variant = 'base',
}: BadgeIconProps) {
  return (
    <BadgeContainer variant={variant}>
      <div>{ComponentIcon}</div>
      <span>{text}</span>
    </BadgeContainer>
  )
}
