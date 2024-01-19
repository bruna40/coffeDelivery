import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const Container = styled.header`
  max-width: 72rem;
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Cart = styled.aside`
  display: flex;
  gap: 0.8rem;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme['purple-light']};

    svg {
      color: ${({ theme }) => theme.purple};
    }

    span {
      color: ${({ theme }) => theme['purple-dark']};
    }

    border-radius: 0.4rem;
    padding: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};

    padding: 0.5rem;
    border-radius: 0.4rem;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${fonts.textS}
      font-weight: bold;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
