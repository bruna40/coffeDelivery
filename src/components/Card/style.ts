import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const ContainerCard = styled.li`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  margin-top: 2.5rem;
  border-radius: 0.375rem 2rem;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;

  img {
    margin-top: -3.125rem;
    max-width: 7.5rem;
    max-height: 7.5rem;
    align-self: center;
  }
  h3 {
    ${fonts.titleS}
    color: ${({ theme }) => theme['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    width: 100%;

    color: ${({ theme }) => theme['base-label']};
    ${fonts.textS}
  }
`
export const Tags = styled.div`
  margin-top: 1.25rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
    ${fonts.tag}
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: ${({ theme }) => theme['base-text']};

  span:first-child {
    ${fonts.textS}
  }

  span:last-child {
    ${fonts.textM}
  }
`
export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    border-radius: 6px;
    background-color: ${({ theme }) => theme['purple-dark']};

    padding: 0.5rem;
    display: flex;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`

export const Buttons = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme['base-title']};
  }
`
