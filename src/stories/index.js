import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/button'

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
