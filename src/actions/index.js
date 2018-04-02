export const CREATE_EXPENSE = 'CREATE_EXPENSE'

export const createExpense = (expense) => ({
  type: CREATE_EXPENSE,
  expense
})

export const SORT_EXPENSE_TABLE = 'SORT_EXPENSE_TABLE'

export const sortExpenseTable = (sortKey) => ({
  type: SORT_EXPENSE_TABLE,
  sortKey
})

export const CHANGE_EXPENSE_FORM = 'CHANGE_EXPENSE_FORM'

export const changeExpenseForm = (event) => ({
  type: CHANGE_EXPENSE_FORM,
  name: event.target.name,
  value: event.target.value
})

export const VALIDATE_EXPENSE_FORM = 'VALIDATE_EXPENSE_FORM'

export const validateExpenseForm = (expense) => ({
  type: VALIDATE_EXPENSE_FORM,
  expense
})
