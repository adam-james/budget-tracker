import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger())
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
