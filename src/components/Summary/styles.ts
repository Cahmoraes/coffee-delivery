import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: min(44.8rem, 100%);

  .container {
    background: var(--base-card);
    margin-top: 1.5rem;
    padding: 2rem;
    border-radius: 6px;

    @media (min-width: 768px) {
      padding: 4rem;
    }
  }
`

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid var(--base-button);
  gap: 1.4rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  img {
    max-height: 6.4rem;
    max-width: 6.4rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    > span {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 0;
        font-size: 1.6rem;
      }
    }
  }

  .price {
    font-weight: 700;
    line-height: 130%;
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  & + & {
    margin-top: 2.4rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--base-button);
  border-radius: 6px;
  padding: 0.8rem;
  border: 0;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;
  color: var(--base-text);

  svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  path {
    fill: var(--purple);
  }
`

export const SummaryDetails = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 1.2rem;
  }

  .total {
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`

export const ConfirmCheckoutButton = styled.button`
  border-radius: 6px;
  text-align: center;
  color: var(--white);
  background: var(--yellow);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.2rem;
  border: 0;
  width: 100%;
`
