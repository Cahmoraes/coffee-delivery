import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 3.2rem 0;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-group {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
  }
`
