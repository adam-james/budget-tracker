import React from 'react'
import { withRouter } from 'react-router-dom'
import ExpenseForm from './expense-form'
import { Container, Spacer } from '../components/layout'
import { ButtonLink } from '../components/button'

const NewExpensePage = () => (
  <Container>
    <Spacer />
    <ButtonLink to="/expenses">Back</ButtonLink>
    <Spacer />
    <ExpenseForm />
  </Container>
)

export default withRouter(NewExpensePage)
