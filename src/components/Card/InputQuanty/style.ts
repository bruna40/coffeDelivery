import styled from 'styled-components'

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
