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
              type="number"
              containerProps={{ style: { gridArea: 'street' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="Número"
              type="number"
              containerProps={{ style: { gridArea: 'number' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="Complemento"
              type="number"
              containerProps={{ style: { gridArea: 'fullAdress' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="Bairro"
              type="number"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="Cidade"
              type="number"
              containerProps={{ style: { gridArea: 'city' } }}
              {...register('cep', { valueAsNumber: true })}
            />
            <Input
              placeholder="UF"
              type="number"
              containerProps={{ style: { gridArea: 'state' } }}
              {...register('cep', { valueAsNumber: true })}
            />
          </AdressForm>
        </AdressContainer>
        <CardPayment />
      </Info>
      <InfoCoffes />
    </ContainerCheckout>
  )
}
