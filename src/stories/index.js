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
  Input,
  Label,
  MoneyInput,
  NumberInput,
  TextInput,
  Submit
} from '../components/form'

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
