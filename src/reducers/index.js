import { combineReducers } from 'redux'
import { List, get, Record, set } from 'immutable'
import { SORT_EXPENSE_TABLE } from '../actions'

const expenses = (state = List(), action) => {
  return state
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

const expenseTable = (state = new SortInstructions(), action) => {
  switch (action.type) {
    case SORT_EXPENSE_TABLE:
      return getSortInstuctions(state, action.sortKey)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  expenses,
  expenseTable
})

export default rootReducer
