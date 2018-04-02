import { combineReducers } from 'redux'
import { List, Map, get, Record, set, setIn } from 'immutable'
import {
  SORT_EXPENSE_TABLE,
  CHANGE_EXPENSE_FORM,
  CREATE_EXPENSE,
  VALIDATE_EXPENSE_FORM
} from '../actions'

const expenses = (state = List(), action) => {
  switch (action.type) {
    case CREATE_EXPENSE:
      return state.push(Map({
        id: state.size + 1,        
        ...action.expense
      }))
    default:
      return state
  }
}

const SortInstructions = Record({
  sortKey: '',
  sortOrder: ''
})

const getSortInstuctions = (oldInstructions, newSortKey) => {
  const oldSortKey = get(oldInstructions, 'sortKey')
  const oldSortOrder = get(oldInstructions, 'sortOrder')

  if (oldSortKey && oldSortKey === newSortKey) {
    if (oldSortOrder === 'asc') {
      return set(oldInstructions, 'sortOrder', 'desc')
    }
    return new SortInstructions()
  }

  return new SortInstructions({
    sortKey: newSortKey,
    sortOrder: 'asc'
  })
}

export const expenseTable = (state = new SortInstructions(), action) => {
  switch (action.type) {
    case SORT_EXPENSE_TABLE:
      return getSortInstuctions(state, action.sortKey)
    default:
      return state
  }
}

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

export const expenseForm = (state = new ExpenseFormState(), action) => {
  switch (action.type) {
    case CHANGE_EXPENSE_FORM:
      return set(state, action.name, action.value)
    case VALIDATE_EXPENSE_FORM:
      return validateExpense(state, action.expense)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  expenses,
  expenseForm,
  expenseTable
})

export default rootReducer
