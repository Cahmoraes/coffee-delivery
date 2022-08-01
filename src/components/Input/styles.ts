import styled from 'styled-components'

export const InputContainer = styled.input`
  border-radius: 4px;
  background: var(--base-input);
  border: 1px solid var(--base-button);
  padding: 1.2rem;
  font-size: 1.4rem;
  color: var(--base-label);
  outline: none;
  transition: all 0.2s;
  color: var(--base-text);

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
  }
`
