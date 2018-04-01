import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import { connect } from 'react-redux'
import ExpenseTable from '../components/expense-table'
import ExpenseForm from '../components/expense-form'
import { Container, Spacer } from '../components/layout'

const App = ({ expenses }) => (
  <Container>
    <ExpenseForm onSubmit={(e) => console.log(e)} />
    <Spacer />
    <ExpenseTable expenses={expenses} />
  </Container>
)

App.propTypes = {
  expenses: PropTypes.instanceOf(List)
}

const mapStateToProps = (state, ownProps) => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(App)
