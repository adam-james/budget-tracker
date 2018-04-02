import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import expenses from './expenses'
import expenseTable from './expense-table'

const rootReducer = combineReducers({
  expenses,
  expenseTable,
  form: formReducer
})

export default rootReducer
