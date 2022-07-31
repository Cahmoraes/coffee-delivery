import { LocationContainer } from './styles'
import { MapPinFillIcon } from '../Icons'

interface LocationProps {
  location: string
}

export function Location({ location }: LocationProps) {
  return (
    <LocationContainer>
      <MapPinFillIcon />
      {location}
    </LocationContainer>
  )
}
