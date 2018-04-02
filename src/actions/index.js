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

export const RESET_EXPENSE_TABLE = 'RESET_EXPENSE_TABLE'

export const resetExpenseTable = () => ({
  type: RESET_EXPENSE_TABLE
})
