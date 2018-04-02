import { get, set, setIn, Map, Record } from 'immutable'
import { CHANGE_EXPENSE_FORM, VALIDATE_EXPENSE_FORM } from '../actions'

const ExpenseFormState = Record({
  date: '',
  description: '',
  amount: '',
  errors: Map()
})

const validateExpense = (state, expense) => {
  let newState = set(state, 'errors', Map())

  if (! get(expense, 'date')) {
    newState = setIn(newState, ['errors', 'date'], 'Date is required.')
  }

  if (! get(expense, 'description')) {
    newState = setIn(newState, ['errors', 'description'], 'Description is required.')
  }

  if (! get(expense, 'amount')) {
    newState = setIn(newState, ['errors', 'amount'], 'Amount is required.')
  }

  return newState
}

const expenseForm = (state = new ExpenseFormState(), action) => {
  switch (action.type) {
    case CHANGE_EXPENSE_FORM:
      return set(state, action.name, action.value)
    case VALIDATE_EXPENSE_FORM:
      return validateExpense(state, action.expense)
    default:
      return state
  }
}

export default expenseForm
