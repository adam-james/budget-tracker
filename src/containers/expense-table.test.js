import React from 'react'
import { shallow } from 'enzyme'
import { get, Map, List } from 'immutable'

import { ExpenseTable } from './expense-table'
import { TableBodyRow, TableCell, TableSortCell } from '../components/table'

describe('ExpenseTable', () => {
  const coffee = Map({
    id: 1,
    date: '04/01/2018',
    description: 'coffee',
    amount: 3.25
  })
  const tea = Map({
    id: 2,
    date: '04/01/2018',
    description: 'tea',
    amount: 2.25
  })
  const water = Map({
    id: 3,
    date: '04/01/2018',
    description: 'water',
    amount: 1.25
  })
  const expenses = List([coffee, tea, water])

  it('renders expenses', () => {
    const wrapper = shallow(<ExpenseTable expenses={expenses} />)

    const tableRows = wrapper.find(TableBodyRow)
    expect(tableRows.length).toBe(3)

    const coffeeRow = tableRows.at(0)
    const coffeeCells = coffeeRow.find(TableCell)
    expect(coffeeCells.at(0).props().children).toBe(get(coffee, 'date'))
    expect(coffeeCells.at(1).props().children).toBe(get(coffee, 'description'))
    expect(coffeeCells.at(2).props().children).toBe(get(coffee, 'amount'))

    const teaRow = tableRows.at(1)
    const teaCells = teaRow.find(TableCell)
    expect(teaCells.at(0).props().children).toBe(get(tea, 'date'))
    expect(teaCells.at(1).props().children).toBe(get(tea, 'description'))
    expect(teaCells.at(2).props().children).toBe(get(tea, 'amount'))

    const waterRow = tableRows.at(2)
    const waterCells = waterRow.find(TableCell)
    expect(waterCells.at(0).props().children).toBe(get(water, 'date'))
    expect(waterCells.at(1).props().children).toBe(get(water, 'description'))
    expect(waterCells.at(2).props().children).toBe(get(water, 'amount'))
  })

  it('sorts ascending', () => {
    const wrapper = shallow(
      <ExpenseTable expenses={expenses} sortKey='amount' sortOrder='asc' />
    )

    const tableRows = wrapper.find(TableBodyRow)
    expect(tableRows.length).toBe(3)

    const waterRow = tableRows.at(0)
    const waterCells = waterRow.find(TableCell)
    expect(waterCells.at(0).props().children).toBe(get(water, 'date'))
    expect(waterCells.at(1).props().children).toBe(get(water, 'description'))
    expect(waterCells.at(2).props().children).toBe(get(water, 'amount'))


    const teaRow = tableRows.at(1)
    const teaCells = teaRow.find(TableCell)
    expect(teaCells.at(0).props().children).toBe(get(tea, 'date'))
    expect(teaCells.at(1).props().children).toBe(get(tea, 'description'))
    expect(teaCells.at(2).props().children).toBe(get(tea, 'amount'))

    const coffeeRow = tableRows.at(2)
    const coffeeCells = coffeeRow.find(TableCell)
    expect(coffeeCells.at(0).props().children).toBe(get(coffee, 'date'))
    expect(coffeeCells.at(1).props().children).toBe(get(coffee, 'description'))
    expect(coffeeCells.at(2).props().children).toBe(get(coffee, 'amount'))
  })

  it('sorts descending', () => {
    const wrapper = shallow(
      <ExpenseTable expenses={expenses} sortKey='description' sortOrder='desc' />
    )

    const tableRows = wrapper.find(TableBodyRow)
    expect(tableRows.length).toBe(3)

    const waterRow = tableRows.at(0)
    const waterCells = waterRow.find(TableCell)
    expect(waterCells.at(0).props().children).toBe(get(water, 'date'))
    expect(waterCells.at(1).props().children).toBe(get(water, 'description'))
    expect(waterCells.at(2).props().children).toBe(get(water, 'amount'))

    const teaRow = tableRows.at(1)
    const teaCells = teaRow.find(TableCell)
    expect(teaCells.at(0).props().children).toBe(get(tea, 'date'))
    expect(teaCells.at(1).props().children).toBe(get(tea, 'description'))
    expect(teaCells.at(2).props().children).toBe(get(tea, 'amount'))

    const coffeeRow = tableRows.at(2)
    const coffeeCells = coffeeRow.find(TableCell)
    expect(coffeeCells.at(0).props().children).toBe(get(coffee, 'date'))
    expect(coffeeCells.at(1).props().children).toBe(get(coffee, 'description'))
    expect(coffeeCells.at(2).props().children).toBe(get(coffee, 'amount'))
  })

  it('handles sort', () => {
    const handleSort = jest.fn()
    const wrapper = shallow(
      <ExpenseTable
        expenses={expenses}
        onSort={handleSort}
      />
    )
    const sortCells = wrapper.find(TableSortCell)
    expect(sortCells.length).toBe(3)

    sortCells.at(0).simulate('click')
    sortCells.at(1).simulate('click')
    sortCells.at(2).simulate('click')

    expect(handleSort.mock.calls.length).toBe(3)
    expect(handleSort.mock.calls[0][0]).toBe('date')
    expect(handleSort.mock.calls[1][0]).toBe('description')
    expect(handleSort.mock.calls[2][0]).toBe('amount')
  })
})
