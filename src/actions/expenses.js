import axios from 'axios'

export const LIST_EXPENSES_REQUEST = 'LIST_EXPENSES_REQUEST'
export const LIST_EXPENSES_SUCCESS = 'LIST_EXPENSES_SUCCESS'
export const LIST_EXPENSES_FAILURE = 'LIST_EXPENSES_FAILURE'

export function listExpensesRequest () {
  return {
    type: LIST_EXPENSES_REQUEST
  }
}

export function listExpensesSuccess (expenses) {
  return {
    type: LIST_EXPENSES_SUCCESS,
    expenses
  }
}

export function listExpensesFailure () {
  return {
    type: LIST_EXPENSES_FAILURE
  }
}

export function listExpenses () {
  return function (dispatch, getState) {
    dispatch(listExpensesRequest())

    axios.get('http://localhost:4000/api/expenses')
      .then(response => response.data.data)
      .then(expenses => dispatch(listExpensesSuccess(expenses)))
      .catch(error => dispatch(listExpensesFailure()))
  }
}
