import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    ${fonts.titleXS}
  }
`

export const InfoPayment = styled.div`
  padding: 2.5rem;
  border-radius: 6px 2.25rem;
  background-color: ${({ theme }) => theme['base-card']};
  width: 100%;
  min-width: 28rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme['base-button']};
    margin: 1.5rem 0;
  }
`

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;

  ${fonts.buttonG}
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
export const CoffeDescription = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const TotalPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${fonts.textS}
    }

    span:last-child {
      ${fonts.textM}
    }
  }

  div:last-child {
    span {
      font-weight: bold;
      ${fonts.textL}
    }
  }
`
export const NumberCoffe = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0.375rem 0.5rem;
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.purple};
    }

    > span {
      ${fonts.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
