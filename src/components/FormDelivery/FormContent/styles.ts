import styled from 'styled-components'

export const FormContentContainer = styled.form`
  margin-top: 3.2rem;
  gap: 1.6rem;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 200px 212px 60px;
    .cep {
      grid-area: 1 / 1 / 2/ 2;
    }

    .rua {
      grid-area: 2 / 1 / 3 / -1;
    }

    .numero {
      grid-area: 3 / 1 / 4 / 2;
    }

    .complemento {
      grid-area: 3 / 2 / 4 / -1;
    }

    .bairro {
      grid-area: 4 / 1 / 5 / 2;
    }

    .cidade {
      grid-area: 4 / 2 / 5 / 3;
    }

    .uf {
      grid-area: 4 / 3 / 5 / -1;
    }
  }
`

export const RegisterButton = styled.button`
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
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-area: 5 / 1 / 6 / -1;
  }
`
