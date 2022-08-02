import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  border: none;
  display: grid;
  place-content: center;
  font-size: 0;
  padding: 1rem;
  background: var(--purple-dark);
  border-radius: 6px;

  svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  path {
    fill: var(--white);
  }
`
