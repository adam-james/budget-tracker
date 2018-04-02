import React from 'react'
import PropTypes from 'prop-types'
import { get, List } from 'immutable'
import {
  Table,
  TableHead,
  TableHeadRow,
  TableSortCell,
  TableBody,
  TableBodyRow,
  TableCell
} from '../components/table'

export class ExpenseTable extends React.Component {
  static propTypes = {
    expenses: PropTypes.instanceOf(List).isRequired,
    resetTable: PropTypes.func,
    sortKey: PropTypes.string,
    sortOrder: PropTypes.string
  }

  componentWillUnmount() {
    const { resetTable } = this.props
    if (resetTable) {
      resetTable()
    }
  }

  render() {
    const { expenses, onSort, sortKey, sortOrder } = this.props
    let sorted

    if (sortKey && sortOrder) {
      sorted = sortExpenses(expenses, sortKey, sortOrder)
    } else {
      sorted = expenses
    }
  
    const tableRows = getTableRows(sorted)
    const sortCells = getSortCells(sortKey, sortOrder, onSort)
  
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
}

export default ExpenseTable

function getSortCells(sortKey, sortOrder, onSort) {
  const columns = ['Date', 'Description', 'Amount']
  const handleClick = (column) => (e) => {
    onSort(column.toLowerCase())
  }

  return columns.map(column => (
    <TableSortCell
      key={column}
      asc={sortKey === column.toLowerCase() && sortOrder === 'asc'}
      desc={sortKey === column.toLowerCase() && sortOrder === 'desc'}
      onClick={handleClick(column)}
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
