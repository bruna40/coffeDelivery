import expresso from '../../assets/coffeImagens/expresso.png'
import leite from '../../assets/coffeImagens/cafe-com-Leite.png'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  ContainerInfo,
  Button,
  InfoPayment,
  CoffeDescription,
  TotalPayment,
  NumberCoffe,
} from './style'
import { Fragment } from 'react'
import { Buttons } from '../Card/style'

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
                  <Buttons>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>2</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </Buttons>
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
                  <Buttons>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>2</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </Buttons>
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
        <Button>Confirmar pedido</Button>
      </InfoPayment>
    </ContainerInfo>
  )
}
