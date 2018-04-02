import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  FormTitle,
  FormGroup,
  Label,
  TextInput,
  DateInput,
  Submit
} from '../components/form'

export const ExpenseForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} >
      <FormTitle>Add Expense</FormTitle>

      <FormGroup>
        <Label>Date</Label>
        <DateInput name="date" />
      </FormGroup>

      <FormGroup>
        <Label>Description</Label>
        <TextInput name="description" />
      </FormGroup>

      <FormGroup>
        <Label>Amount</Label>
        <TextInput name="amount" />
      </FormGroup>

      <FormGroup>
        <Submit />
      </FormGroup>
    </Form>
  )
}

ExpenseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ExpenseForm
