import styled from 'styled-components'
import { colors, font } from './theme' 

export const Input = styled.input`
  font-family: ${font.family};
  font-size: ${font.size};
  padding: 0.5em;
  border: 1px solid ${colors.border};
  border-radius: 3px;
  display: block;
`

export const TextInput = Input.extend.attrs({
  type: 'text'
})`
  width: 90%;
`

export const NumberInput = Input.extend.attrs({
  type: 'number'
})``

export const MoneyInput = Input.extend.attrs({
  type: 'number',
  min: '0.00',
  step: '0.01'
})``

export const Label = styled.label`
  font-family: ${font.family};
  font-size: ${font.size};
  text-transform: uppercase;
  margin-bottom: 0.5em;
  display: block;
`

export const FormGroup = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`
