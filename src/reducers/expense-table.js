import { get, set, Record } from 'immutable'
import {
  RESET_EXPENSE_TABLE,
  SORT_EXPENSE_TABLE
} from '../actions'

const ExpenseTableState = Record({
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
    return new ExpenseTableState()
  }

  return new ExpenseTableState({
    sortKey: newSortKey,
    sortOrder: 'asc'
  })
}

const expenseTable = (state = new ExpenseTableState(), action) => {
  switch (action.type) {
    case SORT_EXPENSE_TABLE:
      return getSortInstuctions(state, action.sortKey)
    case RESET_EXPENSE_TABLE:
      return new ExpenseTableState()
    default:
      return state
  }
}

export default expenseTable
