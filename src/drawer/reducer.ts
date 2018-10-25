import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
// NOTE: Below are just an example.

export interface State {
  isOpened: boolean
}

export interface IDrawerOpenedHandler {
  isOpened: boolean
}

const initialState: State = {
  isOpened: false
}

/*
 * drawer action handler
 */
const isDrawerOpenedHandler = (state: State, payload: IDrawerOpenedHandler): State => ({
  ...state,
  isOpened: payload.isOpened
})

export const reducer = reducerWithInitialState(initialState)
  .case(actions.isDrawerOpened, isDrawerOpenedHandler)
  .build()
