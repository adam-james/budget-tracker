import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, List } from 'immutable'
import { withRouter } from 'react-router-dom'
import { Container, Spacer } from '../components/layout'
import { ButtonLink } from '../components/button'
import ExpenseTable from './expense-table'
import { sortExpenseTable, resetExpenseTable } from '../actions'

const ExpenseIndexPage = ({
  expenses,
  onSort,
  resetExpenseTable,
  sortKey,
  sortOrder
}) => (
  <Container>
    <Spacer />
    <ButtonLink to="add-expense">+ Add Expense</ButtonLink>
    <Spacer />
    <ExpenseTable
      expenses={expenses}
      onSort={onSort}
      resetTable={resetExpenseTable}
      sortKey={sortKey}
      sortOrder={sortOrder}
    />
  </Container>
)

ExpenseIndexPage.propTypes = {
  expenses: PropTypes.instanceOf(List).isRequired,
  onSort: PropTypes.func.isRequired,
  resetExpenseTable: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  expenses: state.expenses,
  sortKey: get(state.expenseTable, 'sortKey'),
  sortOrder: get(state.expenseTable, 'sortOrder')
})

const mapDispatchToProps = (dispatch) => ({
  onSort: (columnName) => dispatch(sortExpenseTable(columnName)),
  resetExpenseTable: () => dispatch(resetExpenseTable())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ExpenseIndexPage)
)
