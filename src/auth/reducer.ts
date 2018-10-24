import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
// NOTE: Below are just an example.

export interface State {
  /*
   * NOTE: switch home screen's content depending on the user's status in the future.
   * For the initial development userStatus consider as number
   */
  userStatus: number
}

const initialState: State = {
  userStatus: 0
}

/*
 * topPage onPressTakeExam button action handler
 */
const onSubmitSignInHandler = (state: State, payload: {}): State => ({
  ...state,
  userStatus: 1
})

export const reducer = reducerWithInitialState(initialState)
  .case(actions.onSubmitSignIn, onSubmitSignInHandler)
  .build()
