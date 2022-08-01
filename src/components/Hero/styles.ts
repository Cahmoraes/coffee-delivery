import styled from 'styled-components'

export const HeroContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5.6rem;
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 2.4rem 0 4.8rem;

  @media (min-width: 768px) {
    padding: 9.4rem 0 10.8rem;
  }

  & > div:nth-of-type(1) {
    flex: 0 1 51.8rem;

    > h1 {
      font: 800 4.8rem 'Baloo 2', sans-serif;
      line-height: 5.34rem;
      color: var(--base-subtitle);

      @media (min-width: 768px) {
        font-size: 3.8rem;
        line-height: 4.34rem;
      }
    }

    > p {
      margin-top: 1.6rem;
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }
`

export const Badges = styled.div`
  margin-top: 3.6rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;

  @media (min-width: 768px) {
    margin-top: 6.6rem;
    grid-template-columns: 1fr 1fr;
  }
`
