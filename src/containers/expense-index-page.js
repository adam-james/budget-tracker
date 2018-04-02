import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Spacer } from '../components/layout'
import { Link } from '../components/button'
import ExpenseTable from './expense-table'

const ExpenseIndexPage = () => (
  <Container>
    <Spacer />
    <Link to="add-expense">+ Add Expense</Link>
    <Spacer />
    <ExpenseTable />
  </Container>
)

export default withRouter(ExpenseIndexPage)
