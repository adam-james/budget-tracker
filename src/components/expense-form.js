import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  FormTitle,
  FormGroup,
  Label,
  TextInput,
  MoneyInput,
  DateInput,
  Submit
} from './form'

const ExpenseForm = ({ onSubmit }) => (
  <Form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(e)
    }} 
  >
    <FormTitle>Add Expense</FormTitle>

    <FormGroup>
      <Label>Description</Label>
      <TextInput />
    </FormGroup>

    <FormGroup>
      <Label>Amount</Label>
      <MoneyInput />
    </FormGroup>

    <FormGroup>
      <Label>Date</Label>
      <DateInput />
    </FormGroup>

    <FormGroup>
      <Submit />
    </FormGroup>
  </Form>
)

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ExpenseForm
