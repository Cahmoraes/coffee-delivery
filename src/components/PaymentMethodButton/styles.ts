import styled from 'styled-components'

export const PaymentMethodButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 6px;
  padding: 1.6rem;
  border: 0;
  background: var(--base-button);
  transition: filter 0.2s;
  max-width: 100%;
  flex: 1;
  white-space: nowrap;

  @media (min-width: 768px) {
    max-width: 178.67px;
  }

  &.is-active {
    border: 1px solid var(--purple);
    background: var(--purple-light);
  }

  &:hover:not(.is-active) {
    filter: brightness(0.9);
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
    flex-shrink: 0;
  }

  path {
    fill: var(--purple);
  }

  span {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 160%;
    font-family: 'Roboto', sans-serif;
  }
`
