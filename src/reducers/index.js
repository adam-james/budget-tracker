import { combineReducers } from 'redux'
import expenses from './expenses'
import expenseTable from './expense-table'
import expenseForm from './expense-form'

const rootReducer = combineReducers({
  expenses,
  expenseForm,
  expenseTable
})

export default rootReducer
