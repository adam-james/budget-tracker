import styled, { css } from 'styled-components'
import { colors, font } from './theme'
import { Link as RouterLink } from 'react-router-dom'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  font-family: ${font.family};
  font-size: ${font.size.m};
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

export const ButtonLink = styled(RouterLink)`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  font-family: ${font.family};
  font-size: ${font.size.m};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
`

export default Button
