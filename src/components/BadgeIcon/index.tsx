import { ReactNode } from 'react'
import { BadgeContainer, IconColorsType } from './styles'

interface BadgeIconProps {
  element: ReactNode
  children: ReactNode
  variant?: IconColorsType
}

export function BadgeIcon({
  element: ComponentIcon,
  children,
  variant = 'base',
}: BadgeIconProps) {
  return (
    <BadgeContainer variant={variant}>
      <div>{ComponentIcon}</div>
      <span>{children}</span>
    </BadgeContainer>
  )
}
