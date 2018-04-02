import { combineReducers } from 'redux'
import { List, Map, get, Record, set } from 'immutable'
import { SORT_EXPENSE_TABLE, CHANGE_EXPENSE_FORM, CREATE_EXPENSE } from '../actions'

const expenses = (state = List(), action) => {
  switch (action.type) {
    case CREATE_EXPENSE:
      return state.push(Map(action.expense))
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
  amount: 0
})

export const expenseForm = (state = new ExpenseFormState(), action) => {
  switch (action.type) {
    case CHANGE_EXPENSE_FORM:
      return set(state, action.name, action.value)
    case CREATE_EXPENSE:
      return new ExpenseFormState()
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
