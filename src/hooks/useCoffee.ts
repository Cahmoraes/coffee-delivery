import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function useCoffee() {
  return useContext(CoffeeContext)
}
