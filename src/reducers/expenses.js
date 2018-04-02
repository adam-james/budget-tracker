import { List, Map } from 'immutable'
import { CREATE_EXPENSE } from '../actions'

const expenses = (state = List(), action) => {
  switch (action.type) {
    case CREATE_EXPENSE:
      return state.push(Map({
        id: state.size + 1,        
        ...action.expense
      }))
    default:
      return state
  }
}

export default expenses
