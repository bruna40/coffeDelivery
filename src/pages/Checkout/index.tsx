import { MapPinLine } from '@phosphor-icons/react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { CardPayment } from '../../components/CardPayment'
import { InfoCoffes } from '../../components/InfoCoffes'
import {
  ContainerCheckout,
  Info,
  AdressContainer,
  Texts,
  AdressForm,
} from './style'

export function Checkout() {
  const { register } = useForm()
  return (
    <ContainerCheckout>
      <Info>
        <h2>Complete seu pedido</h2>
        <AdressContainer>
          <Texts>
            <MapPinLine size={22} weight="thin" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Texts>
          <AdressForm>
            <Input
              placeholder="CEP"
              type="number"
              containerProps={{ style: { gridArea: 'cep' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
              {...register('street')}
            />
            <Input
              placeholder="Número"
              containerProps={{ style: { gridArea: 'number' } }}
              {...register('number')}
            />
            <Input
              placeholder="Complemento"
              optional
              containerProps={{ style: { gridArea: 'fullAdress' } }}
              {...register('fullAdress')}
            />
            <Input
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              {...register('neighborhood')}
            />
            <Input
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
              {...register('city')}
            />
            <Input
              placeholder="UF"
              containerProps={{ style: { gridArea: 'state' } }}
              {...register('state')}
            />
          </AdressForm>
        </AdressContainer>
        <CardPayment />
      </Info>
      <InfoCoffes />
    </ContainerCheckout>
  )
}
