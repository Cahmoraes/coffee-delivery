import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...rest }: InputProps,
  ref,
) => {
  return <InputContainer ref={ref} {...rest}></InputContainer>
}

export const Input = forwardRef(InputComponent)
