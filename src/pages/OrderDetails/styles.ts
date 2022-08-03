import styled from 'styled-components'

export const OrderDetailsContainer = styled.div``

export const MessageConfirm = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 800;
    line-height: 41.6px;
    color: var(--yellow-dark);
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
  }
`

export const ContainerSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const MessageSummary = styled.div`
  border-radius: 6px 36px;
  border: 1px solid var(--purple);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 526px;
  width: 100%;
`
