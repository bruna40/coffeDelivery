import { HTMLAttributes, InputHTMLAttributes, Ref, forwardRef } from 'react'
import { Container } from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const Input = forwardRef(function Input(
  { containerProps, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container {...containerProps}>
      <label>
        <input ref={ref} type="text" {...rest} />
      </label>
    </Container>
  )
})
