import { Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import introImage from '../../assets/introImage.svg'
import { Coffee } from '@phosphor-icons/react/dist/ssr'
import {
  ContainerIntroduction,
  Introduction,
  Text,
  Info,
  ContainerList,
} from './style'
import background from '../../assets/background.svg'
import { useTheme } from 'styled-components'
import coffees from '../../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  const themes = useTheme()
  return (
    <main>
      <ContainerIntroduction data-test="home">
        <Introduction>
          <div>
            <Text>
              <h1 data-test="title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p>
                Com o Coffe Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Text>
            <div>
              <Info>
                <li>
                  <ShoppingCart
                    size={32}
                    weight="fill"
                    color={themes.background}
                    style={{ backgroundColor: themes['yellow-dark'] }}
                  />
                  <span>Compra simples e segura</span>
                </li>
                <li>
                  <Package
                    size={32}
                    weight="fill"
                    color={themes.background}
                    style={{ backgroundColor: themes['base-text'] }}
                  />
                  <span>Embalagem mantém o café intacto</span>
                </li>
                <li>
                  <Timer
                    size={32}
                    weight="fill"
                    color={themes.background}
                    style={{ backgroundColor: themes.yellow }}
                  />
                  <span>Entrega rápida e rastreada</span>
                </li>
                <li>
                  <Coffee
                    size={32}
                    weight="fill"
                    color={themes.background}
                    style={{ backgroundColor: themes.purple }}
                  />
                  <span>O café chega fresquinho até você</span>
                </li>
              </Info>
            </div>
          </div>
          <img src={introImage} alt="cafe com um fundo amarelo" />
        </Introduction>
        <img src={background} alt="" id="bg" />
      </ContainerIntroduction>
      <ContainerList>
        <h2>Nossos cafés</h2>
        <ul>
          {coffees.map((coffee) => (
            <Card coffee={coffee} key={coffee.nome} />
          ))}
        </ul>
      </ContainerList>
    </main>
  )
}
