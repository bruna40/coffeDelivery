import styled from 'styled-components'
import { fonts } from '../../styles/typography'

export const ContainerIntroduction = styled.section`
  position: relative;

  img#bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 34rem;
    width: 100vw;
    object-fit: cover;
  }
`
export const Introduction = styled.div`
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.15rem;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${fonts.titleXL}
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    ${fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
export const Info = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`

export const ContainerList = styled.section`
  max-width: 72.5rem;
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    ${fonts.titleL}
    color: ${({ theme }) => theme['base-subtitle']};
  }

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
