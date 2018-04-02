import React from 'react'
import ExpenseTable from './expense-table'
import ExpenseForm from './expense-form'
import { Container, Spacer } from '../components/layout'

const App = () => (
  <Container>
    <ExpenseForm />
    <Spacer />
    <ExpenseTable />
  </Container>
)

export default App
