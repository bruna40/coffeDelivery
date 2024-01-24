import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { ContainerCard, Tags, Price, Control, Order } from './style'

import { InputQuantity } from './InputQuanty'
import { useState } from 'react'

interface CoffeeProps {
  coffee: {
    imagem: string
    nome: string
    tag: string[]
    descricao: string
    preco: number
  }
}

export function Card({ coffee }: CoffeeProps) {
  const [haveItem, setHaveItem] = useState(false)
  const themes = useTheme()
  function handleAddItem() {
    setHaveItem(!haveItem)
  }
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
          <span>{coffee.preco.toFixed(2)}</span>
        </Price>
        <Order>
          <InputQuantity />

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
