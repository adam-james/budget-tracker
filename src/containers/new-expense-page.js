import React from 'react'
import { withRouter } from 'react-router-dom'
import ExpenseForm from './expense-form'
import { Container, Spacer } from '../components/layout'
import { Link } from '../components/button'

const NewExpensePage = () => (
  <Container>
    <Spacer />
    <Link to="/expenses">Back</Link>
    <Spacer />
    <ExpenseForm />
  </Container>
)

export default withRouter(NewExpensePage)
