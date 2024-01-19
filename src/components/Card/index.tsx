import { ShoppingCart, Minus, Plus } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { ContainerCard, Tags, Price, Control, Order, Buttons } from './style'

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
  const themes = useTheme()
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
            <ShoppingCart size={22} color={themes['base-card']} />
          </button>
        </Order>
      </Control>
    </ContainerCard>
  )
}
