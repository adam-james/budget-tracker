import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Spacer } from '../components/layout'
import { ButtonLink } from '../components/button'
import ExpenseTable from './expense-table'

const ExpenseIndexPage = () => (
  <Container>
    <Spacer />
    <ButtonLink to="add-expense">+ Add Expense</ButtonLink>
    <Spacer />
    <ExpenseTable />
  </Container>
)

export default withRouter(ExpenseIndexPage)
