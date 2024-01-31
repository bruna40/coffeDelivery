import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import logo from '../../assets/logo-sucess.svg'
import { useTheme } from 'styled-components'
import { ContainerSucess, Details, TextTitle, Info, InfoContent } from './style'
import { useContext } from 'react'
import { CoffeContext } from '../../Context/Coffe'
import { useParams } from 'react-router-dom'

export function Sucess() {
  const theme = useTheme()

  const { orders } = useContext(CoffeContext)
  const { orderId } = useParams()

  const order = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  if (!order?.id) {
    return null
  }
  return (
    <ContainerSucess>
      <Details>
        <TextTitle>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TextTitle>
        <Info>
          <InfoContent>
            <li>
              <MapPin size={32} style={{ backgroundColor: theme.purple }} />
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </span>
                <span>
                  {order.neighborhood} - {order.city} - {order.state}
                </span>
              </div>
            </li>
            <li>
              <Timer size={32} style={{ backgroundColor: theme.yellow }} />
              <div>
                <span>Previsão de entrega</span>
                <strong>20min - 30 min</strong>
              </div>
            </li>
            <li>
              <CurrencyDollar
                size={32}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[order.paymentMethod]}</strong>
              </div>
            </li>
          </InfoContent>
        </Info>
      </Details>
      <img src={logo} alt="logo" />
    </ContainerSucess>
  )
}
