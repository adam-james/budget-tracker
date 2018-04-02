import {
  CREATE_EXPENSE,
  createExpense,
  RESET_EXPENSE_TABLE,
  resetExpenseTable,
  SORT_EXPENSE_TABLE,
  sortExpenseTable,
} from '.'

describe('resetExpenseTable', () => {
  it('returns action', () => {
    expect(resetExpenseTable()).toEqual({
      type: RESET_EXPENSE_TABLE
    })
  })
})

describe('createExpense', () => {
  it('returns action', () => {
    const expense = {
      date: '2018-04-01',
      description: 'test expense',
      amount: '2.25'
    }
    expect(createExpense(expense)).toEqual({
      type: CREATE_EXPENSE,
      expense
    })
  })
})

describe('sortExpenseTable', () => {
  it('returns action', () => {
    expect(sortExpenseTable('date')).toEqual({
      type: SORT_EXPENSE_TABLE,
      sortKey: 'date'
    })
    expect(sortExpenseTable('amount')).toEqual({
      type: SORT_EXPENSE_TABLE,
      sortKey: 'amount'
    })
  })
})
