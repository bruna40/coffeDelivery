import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import logo from '../../assets/logo-sucess.svg'
import { useTheme } from 'styled-components'
import { ContainerSucess, Details, TextTitle, Info, InfoContent } from './style'

export function Sucess() {
  const theme = useTheme()
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
                  Entrega em <strong>Rua Julio Verne, 1012</strong>
                </span>
                <span>Serrinha - Fortaleza - CE</span>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </li>
          </InfoContent>
        </Info>
      </Details>
      <img src={logo} alt="logo" />
    </ContainerSucess>
  )
}
