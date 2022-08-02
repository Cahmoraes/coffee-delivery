import styled from 'styled-components'

export const ItemCountContainer = styled.div`
  background: var(--base-button);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.2rem;
  gap: 1rem;

  span {
    font-size: 1.8rem;
    line-height: 130%;
  }

  > button {
    border: none;
    background: transparent;
    font-size: 0;
    font-family: 'Roboto', sans-serif;
    padding: 0.3rem;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    flex-shrink: 0;
  }

  path {
    fill: var(--purple);
  }
`
