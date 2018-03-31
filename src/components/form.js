import React from 'react'
import styled from 'styled-components'
import { colors, font } from './theme'
import Button from './button'

export const Input = styled.input`
  font-family: ${font.family};
  font-size: ${font.size.m};
  padding: 0.5em;
  border: 1px solid ${colors.lightBorder};
  border-radius: 3px;
  display: block;
`

export const TextInput = Input.extend.attrs({
  type: 'text'
})`
  width: 95%;
`

export const NumberInput = Input.extend.attrs({
  type: 'number'
})``

export const MoneyInput = Input.extend.attrs({
  type: 'number',
  min: '0.00',
  step: '0.01'
})``

export const DateInput = Input.extend.attrs({
  type: 'date'
})``

export const Label = styled.label`
  font-family: ${font.family};
  font-size: ${font.size.s};
  text-transform: uppercase;
  margin-bottom: 0.5em;
  display: block;
`

export const FormGroup = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`

export const Form = styled.form`
  border: 1px solid ${colors.darkBorder};
  border-radius: 3px;
  padding: 1em 1.5em;
`

export const FormTitle = styled.h3`
  font-family: ${font.family};
  font-size: ${font.size.l};
  margin: 0.25em 0;
  font-weight: 400;
`

export const Submit = Button.extend.attrs({
  children: 'Submit',
  primary: true
})`
  padding: 0.5em 4em;
  margin: 0 auto;
  margin-right: 0%;
  display: block;
`