import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger({
  stateTransformer: (state) => {
    const toPrint = {}
    for (let key in state) {
      if (state[key].toJS)
        toPrint[key] = state[key].toJS()
      else
        toPrint[key] = state[key]
    }
    return toPrint
  }
})

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(logger)
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
