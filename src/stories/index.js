import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/button'
import {
  DateInput,
  Form,
  FormGroup,
  FormTitle,
  Label,
  MoneyInput,
  TextInput,
  Submit
} from '../components/form'
import {
  Arrow,
  Table,
  TableBody,
  TableBodyRow,
  TableCell,
  TableHead,
  TableHeadRow,
  TableSortCell
} from '../components/table'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('default Button', () => (
    <Button onClick={action('default button clicked')}>I'm a button</Button>
  ))
  .add('primary Button', () => (
    <Button primary>I'm a primary button</Button>
  ))
  .add('secondary Button', () => (
    <Button secondary>I'm a secondary button</Button>
  ))

const formSubmit = action('form-submit')

storiesOf('Form', module)
  .add('Form', () => (
    <Form onSubmit={(e) => {
        e.preventDefault()
        formSubmit(e)
      }} 
    >
      <FormTitle>Add Expense</FormTitle>

      <FormGroup>
        <Label>Description</Label>
        <TextInput onChange={action('description change')} />
      </FormGroup>

      <FormGroup>
        <Label>Amount</Label>
        <MoneyInput onChange={action('money change')} />
      </FormGroup>

      <FormGroup>
        <Label>Date</Label>
        <DateInput onChange={action('date change')} />
      </FormGroup>

      <FormGroup>
        <Submit />
      </FormGroup>
    </Form>
  ))


storiesOf('Table', module)
  .add('Table', () => (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableSortCell asc>Date</TableSortCell>
          <TableSortCell desc>Description</TableSortCell>
          <TableSortCell>Amount</TableSortCell> 
        </TableHeadRow>
      </TableHead>
      <TableBody>
        <TableBodyRow>
          <TableCell>03/31/2018</TableCell>
          <TableCell>Coffee</TableCell>
          <TableCell>$2.25</TableCell> 
        </TableBodyRow>
        <TableBodyRow>
          <TableCell>04/01/2018</TableCell>
          <TableCell>Rent</TableCell>
          <TableCell>$1,500.00</TableCell> 
        </TableBodyRow>
        <TableBodyRow>
          <TableCell>04/02/2018</TableCell>
          <TableCell>Electric</TableCell>
          <TableCell>$19.00</TableCell> 
        </TableBodyRow>
        <TableBodyRow>
          <TableCell>04/05/2018</TableCell>
          <TableCell>Tea</TableCell>
          <TableCell>$2.00</TableCell> 
        </TableBodyRow>
      </TableBody>
    </Table>
  ))
