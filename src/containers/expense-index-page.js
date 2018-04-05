import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get, List } from 'immutable'
import { withRouter } from 'react-router-dom'
import { Container, Spacer } from '../components/layout'
import { ButtonLink } from '../components/button'
import ExpenseTable from './expense-table'
import { sortExpenseTable, resetExpenseTable } from '../actions'
import { listExpenses } from '../actions/expenses'

class ExpenseIndexPage extends React.Component {
  static propTypes = {
    expenses: PropTypes.instanceOf(List).isRequired,
    listExpenses: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    resetExpenseTable: PropTypes.func.isRequired,
    sortKey: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired
  }

  componentDidMount () {
    if (this.props.expenses.size < 1) {
      this.props.listExpenses()
    }
  }

  render () {
    const { expenses, onSort, resetTable, sortKey, sortOrder } = this.props

    return (
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  expenses: state.expenses,
  sortKey: get(state.expenseTable, 'sortKey'),
  sortOrder: get(state.expenseTable, 'sortOrder')
})

const mapDispatchToProps = (dispatch) => ({
  onSort: (columnName) => dispatch(sortExpenseTable(columnName)),
  resetExpenseTable: () => dispatch(resetExpenseTable()),
  listExpenses: () => dispatch(listExpenses())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ExpenseIndexPage)
)
