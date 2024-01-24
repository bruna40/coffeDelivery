import { Minus, Plus } from '@phosphor-icons/react'
import { Buttons } from './style'
import { useState } from 'react'

export function InputQuantity() {
  const [quantyCoffe, setQuantyCoffe] = useState(0)

  function handleQuantyCoffePlus() {
    setQuantyCoffe(quantyCoffe + 1)
  }

  function handleQuantyCoffeMinus() {
    if (quantyCoffe > 0) {
      setQuantyCoffe(quantyCoffe - 1)
    }
  }
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
