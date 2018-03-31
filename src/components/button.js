import styled, { css } from 'styled-components'
import { colors, font } from './theme'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  font-size: ${font.size};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  cursor: pointer;

  ${({ primary }) => primary && css`
    background: ${colors.primary};
    color: white;
  `}

  ${({ secondary }) => secondary && css`
    background: ${colors.secondary};
    border: 2px solid ${colors.secondary};  
    color: white;
  `}
`

export default Button
