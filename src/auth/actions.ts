import { Action, combineReducers, Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

import { IARfxError, INetworkState } from '@src/entities'
import { RootState } from '@src/reducer'
import { ARFX_LOGIN } from '@src/services/api/config'
import { getHeader } from '@src/services/http-header'
import { fetchData } from '@src/services/http-requests'
import { ErrorHandler } from '@src/utils/errorHandler'
import { isHaveValue } from '@src/utils/validator'

const actionCreator = actionCreatorFactory()

// NOTE: onSubmitSignIn() === { type: 'AUTH/SIGN_IN_ACTION', payload: {} }
const onSubmitSignIn = actionCreator<{}>('AUTH/SIGN_IN_ACTION')
const connectionState = actionCreator<INetworkState>('Login/CONNECTION_STATE')

/*
 * method loginRequest
 * This method login request handler
 **/
const loginRequest = (login: string, password: string): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    try {
      const isConnected = getState().login.isConnected

      // Check the network connection is active
      if (isConnected) {
        dispatch(onSubmitSignIn({}))

        const url = ARFX_LOGIN
        const parameter = {
          login: '160601227',
          password: '12345678'
        }
        const header = await getHeader(true)
        fetchData('POST', header, parameter, url, (response: any, errorResponse: any, responseStatus: any, responseHeaders: any) => {
          try {
            if ( isHaveValue(response) && isHaveValue(response.code) && response.code === 200) {
              console.log('fetchData: ' + JSON.stringify(response))
            } else {
              // method to handle the server error
              const serverErrorResopnse: IARfxError = ErrorHandler.getServerError(response, responseStatus)
              console.log('fetchData Error: ' + JSON.stringify(serverErrorResopnse))
            }
          } catch (error) {
            /** */
          }
        })
      } else {
        // method to handle the network error
        const networkErrorResopnse: IARfxError = ErrorHandler.getNetworkError()
        console.log('networkErrorResopnse: ' + JSON.stringify(networkErrorResopnse))
      }
    } catch (error) {
      /** */
    }
  }
}

export const actions = {
  onSubmitSignIn,
  loginRequest,
  connectionState
}
