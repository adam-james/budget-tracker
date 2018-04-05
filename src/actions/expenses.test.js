import {
  LIST_EXPENSES_REQUEST,
  LIST_EXPENSES_SUCCESS,
  LIST_EXPENSES_FAILURE,
  listExpensesRequest,
  listExpensesSuccess,
  listExpensesFailure
} from './expenses'

describe('listExpensesRequest', () => {
  it('returns action', () => {
    expect(listExpensesRequest()).toEqual({
      type: LIST_EXPENSES_REQUEST
    })
  })
})

describe('listExpensesSuccess', () => {
  it('returns action', () => {
    const expenses = [
      {
        date: '2018-01-01',
        description: 'coffee',
        amount: 3.75
      },
      {
        date: '2018-01-02',
        description: 'dinner',
        amount: 27.79
      },
      {
        date: '2018-01-03',
        description: 'groceries',
        amount: 71.72
      }
    ]
    expect(listExpensesSuccess(expenses)).toEqual({
      type: LIST_EXPENSES_SUCCESS,
      expenses
    })
  })
})

describe('listExpensesFailure', () => {
  it('returns action', () => {
    expect(listExpensesFailure()).toEqual({
      type: LIST_EXPENSES_FAILURE
    })
  })
})
