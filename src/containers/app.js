import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import { connect } from 'react-redux'
import ExpenseTable from '../components/expense-table'

const App = ({ expenses }) => (
  <ExpenseTable expenses={expenses} />
)

App.propTypes = {
  expenses: PropTypes.instanceOf(List)
}

const mapStateToProps = (state, ownProps) => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(App)
