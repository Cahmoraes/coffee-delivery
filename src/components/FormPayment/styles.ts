import styled from 'styled-components'

export const FormPaymentContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background: var(--base-card);
  border-radius: 6px;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`
export const FormHeader = styled.header`
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--base-subtitle);
  }

  p {
    color: var(--base-text);
    font-weight: 400;
    font-size: 1.4rem;
    margin-top: 0.2rem;
  }

  svg {
    height: 22px;
    width: 22px;
    flex-shrink: 0;
  }

  path {
    fill: var(--purple);
  }
`

export const FormMethods = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
