import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const ContainerCheckout = styled.main`
  display: flex;
  max-width: 72rem;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
  gap: 2rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${fonts.titleXS}
    color: ${({ theme }) => theme['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const AdressContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
  width: 100%;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Texts = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }
  p {
    ${fonts.textS}
  }
`
export const AdressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';

  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`
export const ContainerPayment = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
  width: 100%;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const TextPayment = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }
  p {
    ${fonts.textS}
  }
`
export const TypePayment = styled.div`
  display: flex;
  gap: 0.5rem;
`
