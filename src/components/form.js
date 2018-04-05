import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { colors, font } from './theme'
import Button from './button'

export const FormError = styled.div`
  font-family: ${font.family};
  font-size: ${font.size.m};
  color: ${colors.warning};
  padding: 0.5em;
  border: 1px solid ${colors.warning};
  border-radius: 3px;
  margin-top: 1em;
`

const FormField = styled(Field)`
  font-family: ${font.family};
  font-size: ${font.size.m};
  padding: 0.5em;
  border: 1px solid ${colors.lightBorder};
  border-radius: 3px;
  display: block;
`

export const TextInput = FormField.extend.attrs({
  component: 'input',
  type: 'text'
})`
  width: 95%;
`

export const DateInput = FormField.extend.attrs({
  component: 'input',
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
  font-weight: 400;
`

export const Submit = styled(function ({ className }) {
  return (
    <Button className={className} primary>Submit</Button>
  )
})`
padding: 0.5em 4em;
margin: 0 auto;
margin-right: 0%;
display: block;
`
