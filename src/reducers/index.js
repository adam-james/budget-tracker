import { combineReducers } from 'redux'
import { List } from 'immutable'

const expenses = (state = List(), action) => {
  return state
}

const rootReducer = combineReducers({
  expenses
})

export default rootReducer
