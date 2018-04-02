import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, getIn } from 'immutable'
import { changeExpenseForm, validateExpenseForm } from '../actions'
import {
  Form,
  FormError,
  FormTitle,
  FormGroup,
  Label,
  TextInput,
  MoneyInput,
  DateInput,
  Submit
} from './form'

export const ExpenseForm = ({
  amount,
  amountError,
  date,
  dateError,
  description,
  descriptionError,
  onChange,
  onSubmit
}) => {
  return (
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
        { dateError && <FormError>{ dateError }</FormError> }
      </FormGroup>

      <FormGroup>
        <Label>Description</Label>
        <TextInput
          name="description"
          value={description}
          onChange={onChange}
        />
        { descriptionError && <FormError>{ descriptionError }</FormError> }        
      </FormGroup>

      <FormGroup>
        <Label>Amount</Label>
        <MoneyInput
          name="amount"
          amount={amount}
          onChange={onChange}
        />
        { amountError && <FormError>{ amountError }</FormError> }        
      </FormGroup>

      <FormGroup>
        <Submit />
      </FormGroup>
    </Form>
  )
}

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
  description: get(state.expenseForm, 'description'),
  amountError: getIn(state.expenseForm, ['errors', 'amount']),
  dateError: getIn(state.expenseForm, ['errors', 'date']),
  descriptionError: getIn(state.expenseForm, ['errors', 'description'])
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(changeExpenseForm(event)),
  onSubmit: (expense) => dispatch(validateExpenseForm(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)
