import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'immutable'
import { changeExpenseForm, createExpense } from '../actions'
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

export const ExpenseForm = ({ amount, date, description, onChange, onSubmit }) => (
  <Form onSubmit={(e) => {
      e.preventDefault()
      onSubmit({ amount, date, description })
    }} 
  >
    <FormTitle>Add Expense</FormTitle>

    <FormGroup>
      <Label>Date</Label>
      <DateInput
        name="date"
        value={date}
        onChange={onChange}
      />
    </FormGroup>

    <FormGroup>
      <Label>Description</Label>
      <TextInput
        name="description"
        value={description}
        onChange={onChange}
      />
    </FormGroup>

    <FormGroup>
      <Label>Amount</Label>
      <MoneyInput
        name="amount"
        amount={amount}
        onChange={onChange}
      />
    </FormGroup>

    <FormGroup>
      <Submit />
    </FormGroup>
  </Form>
)

ExpenseForm.propTypes = {
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  amount: get(state.expenseForm, 'amount'),
  date: get(state.expenseForm, 'date'),
  description: get(state.expenseForm, 'description')
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(changeExpenseForm(event)),
  onSubmit: (expense) => dispatch(createExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)
