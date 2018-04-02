import React from 'react'
import PropTypes from 'prop-types'
import { get, List } from 'immutable'
import { connect } from 'react-redux'
import ExpenseTable from '../components/expense-table'
import ExpenseForm from '../components/expense-form'
import { Container, Spacer } from '../components/layout'
import { sortExpenseTable, changeExpenseForm } from '../actions'

const App = ({ expenses, handleFormChange, handleSort, sortOrder, sortKey }) => (
  <Container>
    <ExpenseForm />
    <Spacer />
    <ExpenseTable
      expenses={expenses}
      onSort={handleSort}
      sortOrder={sortOrder}
      sortKey={sortKey}
    />
  </Container>
)

App.propTypes = {
  expenses: PropTypes.instanceOf(List).isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  expenses: state.expenses,
  sortKey: get(state.expenseTable, 'sortKey'),
  sortOrder: get(state.expenseTable, 'sortOrder')
})

const mapDispatchToProps = (dispatch) => ({
  handleSort: (sortKey) => dispatch(sortExpenseTable(sortKey)),
  handleFormChange: (event) => dispatch(changeExpenseForm(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
