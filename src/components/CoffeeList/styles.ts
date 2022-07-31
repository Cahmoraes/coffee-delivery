import styled from 'styled-components'

export const ContainerCoffeeList = styled.div`
  font-family: 'Baloo 2';
  font-size: 3.2rem;
  color: var(--base-subtitle);

  > ul {
    margin-top: 5.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(234px, auto));
    gap: 3.2rem 2rem;
  }
`
