import { useCallback } from 'react'
import { MapPinLineIcon } from '../Icons'
import { useForm, FormProvider } from 'react-hook-form'
import { FormDeliveryContainer, FormSection, FormHeader } from './styles'
import { FormContent } from './FormContent'
import { FormPayment } from '../FormPayment'
import { useCoffee } from '../../hooks/useCoffee'
import { ICostumerAddress } from '../../contexts/CoffeeContext'

export function FormDelivery() {
  const { registerCostumerAddress } = useCoffee()

  const methods = useForm({
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

  const handleCheckoutOrder = useCallback(
    (data: ICostumerAddress) => {
      registerCostumerAddress(data)
    },
    [registerCostumerAddress],
  )

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
        <FormProvider {...methods}>
          <FormContent onSubmitNewAddress={handleCheckoutOrder} />
        </FormProvider>
      </FormSection>

      <FormPayment />
    </FormDeliveryContainer>
  )
}
