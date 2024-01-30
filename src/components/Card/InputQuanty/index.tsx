import { Minus, Plus } from '@phosphor-icons/react'
import { Buttons } from './style'

interface Props {
  handleQuantyCoffeMinus: () => void
  handleQuantyCoffePlus: () => void
  quantyCoffe: number
}

export function InputQuantity({
  handleQuantyCoffeMinus,
  handleQuantyCoffePlus,
  quantyCoffe,
}: Props) {
  return (
    <Buttons>
      <button onClick={handleQuantyCoffeMinus}>
        <Minus size={14} />
      </button>
      <span>{quantyCoffe}</span>
      <button onClick={handleQuantyCoffePlus}>
        <Plus size={14} />
      </button>
    </Buttons>
  )
}
