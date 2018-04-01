import React from 'react'
import { get } from 'immutable'

import {
  Table,
  TableHead,
  TableHeadRow,
  TableSortCell,
  TableBody,
  TableBodyRow,
  TableCell
} from './table'

export default function({ sortKey, sortOrder, expenses }) {
  let sorted

  if (sortKey && sortOrder) {
    sorted = sortExpenses(expenses, sortKey, sortOrder)
  } else {
    sorted = expenses
  }

  const tableRows = getTableRows(sorted)
  const sortCells = getSortCells(sortKey, sortOrder)

  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          { sortCells }
        </TableHeadRow>
      </TableHead>
      <TableBody>
        { tableRows }
      </TableBody>
    </Table>
  )
}

function getSortCells(sortKey, sortOrder) {
  const columns = ['Date', 'Description', 'Amount']

  return columns.map(column => (
    <TableSortCell
      key={column}
      asc={sortKey === column.toLowerCase() && sortOrder === 'asc'}
      desc={sortKey === column.toLowerCase() && sortOrder === 'desc'}
    >
      { column }
    </TableSortCell>
  ))
}

function getTableRows(sorted) {
  return sorted.map(expense => (
    <TableBodyRow key={get(expense, 'id')}>
      <TableCell>{ get(expense, 'date') }</TableCell>
      <TableCell>{ get(expense, 'description') }</TableCell>
      <TableCell>{ get(expense, 'amount') }</TableCell> 
    </TableBodyRow>
  ))
}

function sortExpenses(expenses, sortKey, sortOrder) {
  const getKey = (expense) => get(expense, sortKey)
  const descending = (a, b) => (a < b) ? 1 : -1

  if (sortOrder === 'asc') return expenses.sortBy(getKey)
  return expenses.sortBy(getKey, descending)
}
