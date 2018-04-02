import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import ExpenseForm from '../components/expense-form'
import { Container, Spacer } from '../components/layout'
import { ButtonLink } from '../components/button'
import { createExpense } from '../actions'

const NewExpenseForm = reduxForm({ form: 'newExpenseForm' })(ExpenseForm)

const NewExpensePage = ({ createExpense, history }) => {
  const handleSubmit = (expense) => {
    createExpense(expense)
    history.push('/expenses')
  }

  return (
    <Container>
      <Spacer />
      <ButtonLink to="/expenses">Back</ButtonLink>
      <Spacer />
      <NewExpenseForm onSubmit={handleSubmit} />
    </Container>
  )
}

NewExpensePage.propTypes = {
  createExpense: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  createExpense: (expense) => dispatch(createExpense(expense))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewExpensePage)
)
