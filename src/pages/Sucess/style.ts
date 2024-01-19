import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const ContainerSucess = styled.main`
  display: flex;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;

  img {
    margin-bottom: -13px;
  }
`
export const Details = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
export const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    ${fonts.titleL}
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    ${fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 0.375rem 2rem;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const InfoContent = styled.ul`
  list-style: none;

  padding: 2.5rem;
  background-color: white;
  border-radius: 0.375rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  > li div {
    display: flex;
    flex-direction: column;
  }
`
