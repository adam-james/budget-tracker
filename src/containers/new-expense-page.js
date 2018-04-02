import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import ExpenseForm from './expense-form'
import { Container, Spacer } from '../components/layout'

const NewExpensePage = () => (
  <Container>
    <Link to="/expenses">Back</Link>
    <Spacer />
    <ExpenseForm />
  </Container>
)

export default withRouter(NewExpensePage)
