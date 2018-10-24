import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistedReducer, RootState } from './reducer'

const configureStore = () => {
  return createStore<RootState, any, any, any>(persistedReducer, applyMiddleware(thunk))

}

export const store = configureStore()
