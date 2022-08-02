import styled from 'styled-components'

const IconColors = {
  'yellow-dark': '#C47F17',
  yellow: '#DBAC2C',
  base: '#DBAC2C',
  purple: '#8047F8',
} as const

export type IconColorsType = keyof typeof IconColors

interface BaseContainerProps {
  variant: IconColorsType
}

export const BadgeContainer = styled.div<BaseContainerProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    height: 2rem;
    width: 2rem;
    flex-shrink: 0;
  }

  path {
    fill: var(--background);
  }

  & > div {
    border-radius: 50%;
    background: #dddd;
    display: grid;
    place-items: center;
    padding: 0.8rem;
    background: ${(props) => IconColors[props.variant]};
  }

  & > span {
    color: var(--base-text);
    font-size: 1.6rem;
    line-height: 2.08rem;
    font-weight: 400;
  }
`
