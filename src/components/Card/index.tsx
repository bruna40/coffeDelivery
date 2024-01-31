import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { ContainerCard, Tags, Price, Control, Order } from './style'

import { InputQuantity } from './InputQuanty'
import { useContext, useState } from 'react'
import { CoffeContext } from '../../Context/Coffe'

interface CoffeeProps {
  coffee: {
    id: string
    imagem: string
    nome: string
    tag: string[]
    descricao: string
    preco: number
  }
}

export function Card({ coffee }: CoffeeProps) {
  const [haveItem, setHaveItem] = useState(false)
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const { addCoffe } = useContext(CoffeContext)
  const themes = useTheme()

  function addCoffePlus() {
    setQuantityCoffee((state) => (state += 1))
  }

  function addCoffeMinus() {
    if (quantityCoffee > 1) {
      setQuantityCoffee((state) => (state -= 1))
    }
  }

  function handleAddItem() {
    addCoffe({ id: coffee.id, quantityCoffee })
    setHaveItem((state) => !state)
  }

  const priceCoffes = coffee.preco * quantityCoffee

  return (
    <ContainerCard>
      <img src={coffee.imagem} alt={coffee.nome} />
      <Tags>
        {coffee.tag.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </Tags>
      <h3>{coffee.nome}</h3>
      <p>{coffee.descricao}</p>
      <Control>
        <Price>
          <span>R$</span>
          <strong>{priceCoffes.toFixed(2)}</strong>
        </Price>
        <Order>
          <InputQuantity
            quantyCoffe={quantityCoffee}
            handleQuantyCoffeMinus={addCoffeMinus}
            handleQuantyCoffePlus={addCoffePlus}
          />

          <button onClick={handleAddItem} disabled={haveItem}>
            {haveItem ? (
              <CheckFat size={22} color={themes['base-card']} weight="fill" />
            ) : (
              <ShoppingCart size={22} color={themes['base-card']} />
            )}
          </button>
        </Order>
      </Control>
    </ContainerCard>
  )
}
