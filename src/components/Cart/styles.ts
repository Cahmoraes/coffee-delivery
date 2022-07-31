import styled from 'styled-components'

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-size: 0;
  padding: 0.8rem;
  background: var(--yellow-light);
  border-radius: 6px;
  position: relative;

  svg > path {
    fill: var(--yellow-dark);
  }

  .cart-count {
    color: var(--white);
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.06rem;
    background: var(--yellow-dark);
    border-radius: 50%;
    display: block;
    font-size: 1.4rem;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: -0.8rem;
    right: -0.6rem;
  }
`
