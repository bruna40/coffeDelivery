import { Minus, Plus } from '@phosphor-icons/react'
import { Buttons } from './style'

interface Props {
  handleQuantyCoffeMinus: () => void
  handleQuantyCoffePlus: () => void
  quantyCoffe: number
  dataTestPlus: string
  dataTestMin: string
  dataTestQuanty: string
}

export function InputQuantity({
  handleQuantyCoffeMinus,
  handleQuantyCoffePlus,
  quantyCoffe,
  dataTestPlus,
  dataTestMin,
  dataTestQuanty,
}: Props) {
  return (
    <Buttons>
      <button onClick={handleQuantyCoffeMinus} data-test={dataTestMin}>
        <Minus size={14} />
      </button>
      <span data-test={dataTestQuanty}>{quantyCoffe}</span>
      <button onClick={handleQuantyCoffePlus} data-test={dataTestPlus}>
        <Plus size={14} />
      </button>
    </Buttons>
  )
}
