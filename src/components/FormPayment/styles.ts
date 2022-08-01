import styled from 'styled-components'

export const FormPaymentContainer = styled.div`
  background: var(--base-card);
  border-radius: 6px;
  padding: 4rem;
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
  }

  path {
    fill: var(--purple);
  }
`
