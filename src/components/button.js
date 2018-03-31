import styled, { css } from 'styled-components'
import theme from './theme'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};

  ${({ primary }) => primary && css`
    background: ${theme.colors.primary};
    color: white;
  `}

  ${({ secondary }) => secondary && css`
  background: ${theme.colors.secondary};
  border: 2px solid ${theme.colors.secondary};  
  color: white;
`}
`

export default Button
