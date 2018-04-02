import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './app'
import ExpenseIndexPage from './expense-index-page'
import NewExpensePage from './new-expense-page'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <Route path="/expenses" component={ExpenseIndexPage} />
      <Route path="/add-expense" component={NewExpensePage} />            
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
