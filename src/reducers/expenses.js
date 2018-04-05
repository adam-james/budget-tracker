import { fromJS, List, Map } from 'immutable'
import { CREATE_EXPENSE } from '../actions'
import { LIST_EXPENSES_SUCCESS } from '../actions/expenses'

const expenses = (state = List(), action) => {
  switch (action.type) {
    case CREATE_EXPENSE:
      return state.push(Map({
        id: state.size + 1,        
        ...action.expense
      }))
    case LIST_EXPENSES_SUCCESS:
      return fromJS(action.expenses)
    default:
      return state
  }
}

export default expenses
