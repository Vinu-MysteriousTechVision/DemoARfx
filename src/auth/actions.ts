import { Action, combineReducers, Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

import { RootState } from '@src/reducer'

const actionCreator = actionCreatorFactory()

// NOTE: onSubmitSignIn() === { type: 'AUTH/SIGN_IN_ACTION', payload: {} }
const onSubmitSignIn = actionCreator<{}>('AUTH/SIGN_IN_ACTION')

/*
 * method loginRequest
 * This method login request handler
 **/
const loginRequest = (login: string, password: string): any => {
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(onSubmitSignIn({}))
  }
}

export const actions = {
  onSubmitSignIn,
  loginRequest
}
