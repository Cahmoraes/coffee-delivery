import { useFormContext } from 'react-hook-form'
import { Input } from '../../Input'
import { FormContentContainer, RegisterButton } from './styles'

interface FormContentProps {
  onSubmitNewAddress: (data: any) => void
}

export function FormContent({ onSubmitNewAddress }: FormContentProps) {
  const { register, handleSubmit } = useFormContext()

  return (
    <FormContentContainer onSubmit={handleSubmit(onSubmitNewAddress)}>
      <Input className="cep" placeholder="CEP" {...register('cep')} />

      <Input className="rua" placeholder="Rua" {...register('rua')} />

      <Input className="numero" placeholder="Número" {...register('numero')} />

      <Input
        className="complemento"
        placeholder="Complemento"
        {...register('complemento')}
      />

      <Input className="bairro" placeholder="Bairro" {...register('bairro')} />

      <Input className="cidade" placeholder="Cidade" {...register('cidade')} />

      <Input className="uf" placeholder="UF" {...register('uf')} />

      <RegisterButton>Cadastrar</RegisterButton>
    </FormContentContainer>
  )
}
