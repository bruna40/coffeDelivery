import {
  MapPinLine,
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
} from '@phosphor-icons/react'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import {
  ContainerPayment,
  TextPayment,
  TypePayment,
  ContainerCheckout,
  Info,
  AdressContainer,
  Texts,
  AdressForm,
} from './style'
import { InfoCoffes } from '../../components/InfoCoffes'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Radio } from '../../components/Radio'

const newAdressValidateSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type NewOrderFormData = zod.infer<typeof newAdressValidateSchema>

export function Checkout() {
  const {
    handleSubmit,
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(newAdressValidateSchema),
  })

  function handleCreateOrder() {
    reset()
  }

  const methodPayment = watch('paymentMethod')
  return (
    <ContainerCheckout>
      <Info>
        <h2>Complete seu pedido</h2>
        <form onSubmit={handleSubmit(handleCreateOrder)} id="order">
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
                error={errors.cep}
              />
              <Input
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
                error={errors.street}
              />
              <Input
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
                error={errors.number}
              />
              <Input
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
                error={errors.fullAddress}
              />
              <Input
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
                error={errors.neighborhood}
              />
              <Input
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
                error={errors.city}
              />
              <Input
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
                error={errors.state}
              />
            </AdressForm>
          </AdressContainer>
          <ContainerPayment>
            <TextPayment>
              <CurrencyDollar size={22} />
              <span>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </TextPayment>
            <TypePayment>
              <Radio
                type="radio"
                {...register('paymentMethod')}
                value="credit"
                isSelected={methodPayment === 'credit'}
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>
              <Radio
                type="radio"
                {...register('paymentMethod')}
                value="debit"
                isSelected={methodPayment === 'debit'}
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                type="radio"
                {...register('paymentMethod')}
                value="cash"
                isSelected={methodPayment === 'cash'}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </TypePayment>
          </ContainerPayment>
        </form>
      </Info>
      <InfoCoffes />
    </ContainerCheckout>
  )
}
