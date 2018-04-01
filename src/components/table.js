import React from 'react'
import styled from 'styled-components'
import { colors, font } from './theme'

export const TableCell = styled.td`
  padding: 1em 2em;
  font-size: ${font.size.m};
  font-family: ${font.family};
  border-bottom: inherit;
`

export const TableBody = styled.tbody``

const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.lightBorder};
`

const SortText = styled.span`
  cursor: pointer;
`

const Arrow = ({ down }) => {
  return down ? <span> &#x25BC;</span> : <span> &#x25B2;</span>
}

export const TableSortCell = (props) => (
  <TableCell {...props}>
    <SortText>
      { props.children }
      { props.desc ? <Arrow /> : '' }
      { props.asc ? <Arrow down /> : '' }
    </SortText>
  </TableCell>
)

export const TableHeadRow = TableRow.extend``

export const TableBodyRow = TableRow.extend`
  :last-child {
    border-bottom: none;
  }
`

const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid ${colors.darkBorder};
  border-radius: 3px;
`

const TableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Table = styled(
  ({ children }) => (
    <TableWrapper>
      <TableTable>
        { children }
      </TableTable>
    </TableWrapper>
  )
)``

export const TableHead = styled.thead`
  font-weight: 700;
`
