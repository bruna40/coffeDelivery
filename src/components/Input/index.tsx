import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  FocusEvent,
  useState,
} from 'react'
import { Container, ErrorMessage } from './style'
import { FieldError } from 'react-hook-form'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const Input = forwardRef(function Input(
  { containerProps, optional, error, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [focused, setFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setFocused(true)
    onFocus?.(event)
  }
  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setFocused(false)
    onBlur?.(event)
  }
  return (
    <Container {...containerProps} data-state={focused ? 'focused' : 'blurred'}>
      <label>
        <input
          ref={ref}
          type="text"
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {optional ? <span>Opcional</span> : null}
      </label>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Container>
  )
})
