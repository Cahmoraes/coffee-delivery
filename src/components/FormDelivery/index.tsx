import { MapPinLineIcon } from '../Icons'
import { useForm } from 'react-hook-form'
import {
  FormDeliveryContainer,
  FormSection,
  FormHeader,
  FormContent,
} from './styles'
import { Input } from '../Input'

export function FormDelivery() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  function handleCheckoutOrder() {}

  return (
    <FormDeliveryContainer>
      <h3>Complete seu pedido</h3>
      <FormSection>
        <FormHeader>
          <MapPinLineIcon />
          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <FormContent onSubmit={handleSubmit(handleCheckoutOrder)}>
          <Input placeholder="CEP" {...register('cep')} />
        </FormContent>
      </FormSection>
    </FormDeliveryContainer>
  )
}
