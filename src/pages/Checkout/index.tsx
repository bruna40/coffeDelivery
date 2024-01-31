import {
  MapPinLine,
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { Input } from '../../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  ContainerPayment,
  TextPayment,
  TypePayment,
  ContainerCheckout,
  Info,
  AdressContainer,
  Texts,
  AdressForm,
  TotalPayment,
  InfoPayment,
  ContainerInfo,
  CoffeDescription,
  NumberCoffe,
  ButtonFinished,
} from './style'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Radio } from '../../components/Radio'
import { Fragment, useContext } from 'react'
import { CoffeContext } from '../../Context/Coffe'
import { InputQuantity } from '../../components/Card/InputQuanty'
import coffes from '../../../data.json'

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

  const {
    cart,
    finishedCart,
    handleQuantyCoffeMinus,
    handleQuantyCoffePlus,
    removeCoffe,
  } = useContext(CoffeContext)

  const shippingPrice = 5.0

  const coffeInCart = cart.map((item) => {
    const infoCoffee = coffes.find((coffe) => coffe.id === item.id)

    if (!infoCoffee) {
      throw new Error('Café não encontrado')
    }
    return {
      ...infoCoffee,
      quantityCoffee: item.quantityCoffee,
    }
  })

  const totalItemsPrice = coffeInCart.reduce((acc, item) => {
    return (acc += item.preco * item.quantityCoffee)
  }, 0)

  const handleCreateOrder: SubmitHandler<NewOrderFormData> = (data) => {
    reset()

    if (cart.length === 0) alert('É preciso ter pelo menos um item no carro')
    finishedCart(data)
  }

  const methodPayment = watch('paymentMethod')
  return (
    <ContainerCheckout data-test="checkout">
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
                data-test="cep-input"
              />
              <Input
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
                error={errors.street}
                data-test="street-input"
              />
              <Input
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
                error={errors.number}
                data-test="number-input"
              />
              <Input
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
                error={errors.fullAddress}
                data-test="fullAdress-input"
              />
              <Input
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
                error={errors.neighborhood}
                data-test="neighborhood-input"
              />
              <Input
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
                error={errors.city}
                data-test="city-input"
              />
              <Input
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
                error={errors.state}
                data-test="state-input"
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
                data-test="payment-method-credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>
              <Radio
                type="radio"
                {...register('paymentMethod')}
                value="debit"
                isSelected={methodPayment === 'debit'}
                data-test="payment-method-debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                type="radio"
                {...register('paymentMethod')}
                value="cash"
                isSelected={methodPayment === 'cash'}
                data-test="payment-method-cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </TypePayment>
          </ContainerPayment>
        </form>
      </Info>
      <ContainerInfo>
        <h2>Cafés selecionados</h2>
        <InfoPayment>
          {coffeInCart.map((coffe) => (
            <Fragment key={coffe.id}>
              <CoffeDescription>
                <div>
                  <img src={coffe.imagem} alt={coffe.nome} />
                  <div>
                    <span>{coffe.nome}</span>
                    <NumberCoffe>
                      <InputQuantity
                        quantyCoffe={coffe.quantityCoffee}
                        handleQuantyCoffeMinus={() =>
                          handleQuantyCoffeMinus(coffe.id)
                        }
                        handleQuantyCoffePlus={() =>
                          handleQuantyCoffePlus(coffe.id)
                        }
                        dataTestMin={`min-${coffe.id}`}
                        dataTestQuanty={`quanty-${coffe.id}`}
                        dataTestPlus={`max-${coffe.id}`}
                      />
                      <button onClick={() => removeCoffe(coffe.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </NumberCoffe>
                  </div>
                </div>
                <aside>R$ {coffe.preco?.toFixed(2)}</aside>
              </CoffeDescription>
              <span />
            </Fragment>
          ))}
          <TotalPayment>
            <div>
              <span>Total de itens</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {' '}
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </TotalPayment>
          <ButtonFinished type="submit" form="order" data-test="finish-order">
            Confirmar pedido
          </ButtonFinished>
        </InfoPayment>
      </ContainerInfo>
    </ContainerCheckout>
  )
}
