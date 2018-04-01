import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable'
import Root from './containers/root'
import configureStore from './store/configure-store'

const expenses = fromJS([
  {
    id: 1,
    date: '03/31/2018',
    description: 'Coffee',
    amount: 2.25
  },
  {
    id: 2,
    date: '04/01/2018',
    description: 'Rent',
    amount: 1500.00
  },
  {
    id: 3,
    date: '04/02/2018',
    description: 'Electric',
    amount: 19.00
  },
  {
    id: 4,
    date: '04/05/2018',
    description: 'Tea',
    amount: 2.00
  }
])

const store = configureStore({ expenses })

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
)
