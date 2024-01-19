import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-button']};
    background-color: ${({ theme }) => theme['base-input']};

    transition: all 0.2s;

    input {
      color: ${({ theme }) => theme['base-text']};
      width: 100%;
      background-color: transparent;
      border: none;
      padding: 12px;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`
