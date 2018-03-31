import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/button'
import {
  FormGroup,
  Input,
  Label,
  MoneyInput,
  NumberInput,
  TextInput
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

storiesOf('Form', module)
  .add('Text Input', () => (
    <Input type="text" />
  ))
  .add('Number Input', () => (
    <Input type="number" />
  ))
  .add('Label', () => (
    <Label>I'm a label</Label>
  ))
  .add('Input with Label', () => (
    <div>
      <FormGroup>
        <Label>Description</Label>
        <TextInput />
      </FormGroup>

      <FormGroup>
        <Label>Amount</Label>
        <MoneyInput />
      </FormGroup>
    </div>
  ))
