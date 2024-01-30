import { Trash } from '@phosphor-icons/react'
import coffes from '../../../data.json'
import {
  ContainerInfo,
  Button,
  InfoPayment,
  CoffeDescription,
  TotalPayment,
  NumberCoffe,
} from './style'
import { Fragment, useContext } from 'react'
import { InputQuantity } from '../Card/InputQuanty'
import { CoffeContext } from '../../Context/Coffe'

export function InfoCoffes() {
  const { handleQuantyCoffeMinus, handleQuantyCoffePlus, cart } =
    useContext(CoffeContext)

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
  return (
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
                    />
                    <button>
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
