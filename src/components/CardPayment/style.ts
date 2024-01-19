import styled from 'styled-components'
import { fonts } from '../../styles/typography'

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
  label {
    padding: 1rem;
    gap: 0.75rem;

    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 6px;
    border: 1px solid transparent;

    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};

    text-transform: uppercase;
    ${fonts.buttonM}
    transition: all 0.2s;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    &[data-state='true'] {
      background-color: ${({ theme }) => theme['purple-light']};
      border-color: ${({ theme }) => theme.purple};
    }
  }
`
