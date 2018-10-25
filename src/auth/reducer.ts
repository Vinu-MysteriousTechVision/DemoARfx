import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'

import { INetworkState } from '@src/entities'

export interface State {
  /*
   * NOTE: switch home screen's content depending on the user's status in the future.
   * For the initial development userStatus consider as number
   */
  userStatus: number
  isConnected: boolean
}

const initialState: State = {
  userStatus: 0,
  isConnected: true
}

/*
 * topPage onPressTakeExam button action handler
 */
const onSubmitSignInHandler = (state: State, payload: {}): State => ({
  ...state,
  userStatus: 1
})

const connectionStateHandler = (state: State, payload: INetworkState): State => {
  return {
    ...state,
    isConnected: payload.status
  }
}


export const reducer = reducerWithInitialState(initialState)
  .case(actions.onSubmitSignIn, onSubmitSignInHandler)
  .case(actions.connectionState, connectionStateHandler)
  .build()
