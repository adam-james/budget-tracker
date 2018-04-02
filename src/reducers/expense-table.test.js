import expenseTable from './expense-table'
import {
  RESET_EXPENSE_TABLE,
  SORT_EXPENSE_TABLE
} from '../actions'

describe('expenseTable reducer', () => {
  it('sets default state', () => {
    expect(expenseTable(undefined, {}).toJS()).toEqual({
      sortKey: '',
      sortOrder: ''
    })
  })

  it('sets sortKey to ascending', () => {
    const state = expenseTable(undefined, {})
    const action = {
      type: SORT_EXPENSE_TABLE,
      sortKey: 'date'
    }
    expect(expenseTable(state, action).toJS()).toEqual({
      sortKey: 'date',
      sortOrder: 'asc'
    })
  })

  it('sets sortKey to descending', () => {
    const initialState = expenseTable(undefined, {})
    const action = {
      type: SORT_EXPENSE_TABLE,
      sortKey: 'date'
    }
    const state = expenseTable(initialState, action)
    expect(expenseTable(state, action).toJS()).toEqual({
      sortKey: 'date',
      sortOrder: 'desc'
    })
  })

  it('resets sortKey and sortOrder', () => {
    const state1 = expenseTable(undefined, {})
    const action = {
      type: SORT_EXPENSE_TABLE,
      sortKey: 'date'
    }
    const state2 = expenseTable(state1, action)
    const state3 = expenseTable(state2, action)
    expect(expenseTable(state3, action).toJS()).toEqual({
      sortKey: '',
      sortOrder: ''
    })
  })

  it('resets state', () => {
    const state1 = expenseTable(undefined, {})
    const action = {
      type: SORT_EXPENSE_TABLE,
      sortKey: 'date'
    }
    const state2 = expenseTable(state1, action)
    const resetAction = {
      type: RESET_EXPENSE_TABLE
    }
    expect(expenseTable(state2, resetAction).toJS()).toEqual({
      sortKey: '',
      sortOrder: ''
    })
  })
})
