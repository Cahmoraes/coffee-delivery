import styled from 'styled-components'

export const ContainerCoffeeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--base-card);
  padding: 2rem;
  position: relative;
  border-radius: 6px 36px;

  > img {
    max-width: 120px;
    height: 120px;
    margin-top: -4rem;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    margin-top: 1.8rem;

    li {
      background: var(--yellow-light);
      padding: 0.4rem 0.8rem;
      border-radius: 100px;
      font-size: 1rem;
      list-style: none;
      color: var(--yellow-dark);
      text-transform: uppercase;
      text-align: center;
    }
  }

  > h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.6rem;
    color: var(--base-subtitle);
    margin-top: 1.6rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--base-label);
    margin-top: 0.8rem;
    line-height: 18.2px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3.3rem;

  .price-info {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  span {
    font-weight: 400;
    font-size: 1.4rem;
  }

  .price {
    font-weight: 700;
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const ItemCount = styled.div`
  background: var(--base-button);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.2rem;
  gap: 1rem;

  > span {
    font-size: 2rem;
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
  }

  path {
    fill: var(--purple);
  }
`
