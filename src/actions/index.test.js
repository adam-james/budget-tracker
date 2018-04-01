import { SORT_EXPENSE_TABLE, sortExpenseTable } from '.'

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
