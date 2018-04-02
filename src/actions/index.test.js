import {
  CREATE_EXPENSE,
  createExpense,
  CHANGE_EXPENSE_FORM,
  changeExpenseForm,
  SORT_EXPENSE_TABLE,
  sortExpenseTable,
  VALIDATE_EXPENSE_FORM,
  validateExpenseForm
} from '.'

describe('validateExpenseForm', () => {
  it('returns action', () => {
    const expense = {
      date: '2018-04-01',
      description: 'test expense',
      amount: '2.25'
    }
    
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

describe('changeExpenseForm', () => {
  it('returns action', () => {
    const event = {
      target: {
        name: 'test event',
        value: 'test value'
      }
    }
    expect(changeExpenseForm(event)).toEqual({
      type: CHANGE_EXPENSE_FORM,
      name: event.target.name,
      value: event.target.value 
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
