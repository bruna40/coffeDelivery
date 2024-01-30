import expresso from '../../assets/expresso.png'
import leite from '../../assets/cafe-com-Leite.png'
import { Trash } from '@phosphor-icons/react'
import {
  ContainerInfo,
  Button,
  InfoPayment,
  CoffeDescription,
  TotalPayment,
  NumberCoffe,
} from './style'
import { Fragment } from 'react'
import { InputQuantity } from '../Card/InputQuanty'

export function InfoCoffes() {
  return (
    <ContainerInfo>
      <h2>Cafés selecionados</h2>
      <InfoPayment>
        <Fragment>
          <CoffeDescription>
            <div>
              <img src={expresso} alt="cafe expresso" />
              <div>
                <span>Expresso Tradicional</span>
                <NumberCoffe>
                  <InputQuantity />
                  <button>
                    <Trash />
                    <span>Remover</span>
                  </button>
                </NumberCoffe>
              </div>
            </div>
            <aside>R$ 2.00</aside>
          </CoffeDescription>
          <span />
        </Fragment>
        <Fragment>
          <CoffeDescription>
            <div>
              <img src={leite} alt="cafe com leite" />
              <div>
                <span>Leite</span>
                <NumberCoffe>
                  <InputQuantity />
                  <button>
                    <Trash />
                    <span>Remover</span>
                  </button>
                </NumberCoffe>
              </div>
            </div>
            <aside>R$ 2.00</aside>
          </CoffeDescription>
          <span />
        </Fragment>
        <TotalPayment>
          <div>
            <span>Total de itens</span>
            <span>R$ 4.00</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 4.00</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 8.00</span>
          </div>
        </TotalPayment>
        <Button type="submit" form="order">
          Confirmar pedido
        </Button>
      </InfoPayment>
    </ContainerInfo>
  )
}
