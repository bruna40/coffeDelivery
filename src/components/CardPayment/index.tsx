import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ContainerPayment, TextPayment, TypePayment } from './style'

export function CardPayment() {
  return (
    <ContainerPayment>
      <TextPayment>
        <CurrencyDollar size={22} />
        <span>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </TextPayment>
      <TypePayment>
        <label>
          <input type="radio" />
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </label>
        <label>
          <input type="radio" />
          <Bank size={16} />
          <span>Cartão de débito</span>
        </label>
        <label>
          <input type="radio" />
          <Money size={16} />
          <span>Dinheiro</span>
        </label>
      </TypePayment>
    </ContainerPayment>
  )
}
