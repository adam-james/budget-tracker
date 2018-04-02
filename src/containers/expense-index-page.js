import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container, Spacer } from '../components/layout'
import ExpenseTable from './expense-table'

const ExpenseIndexPage = () => (
  <Container>
    <Link to="add-expense">Add Expense</Link>
    <Spacer />
    <ExpenseTable />
  </Container>
)

export default withRouter(ExpenseIndexPage)
