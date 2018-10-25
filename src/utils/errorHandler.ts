import _ from 'underscore'

import { ARfxError, IARfxError, IServerError } from '@src/entities'

const ErrorEnum = {
  UNAUTHORIZED: 401
}

const getServerError = (errorResponse: IServerError, responseStatus: any): IARfxError => {
  const errInfoLoadingFailed = 'An error occurred. Please try again later.'
  try {
    if (!_.isUndefined(errorResponse) && !_.isNull(errorResponse) && !_.isUndefined(errorResponse.code) && !_.isNull(errorResponse.code)) {
      const error = errorResponse.message
      if (errorResponse.code === 400 || errorResponse.code === 500) {
        if (!_.isUndefined(error) && !_.isNull(error) && !_.isEmpty(error)) {
          return ARfxError(error, undefined)
        } else {
          return ARfxError(errInfoLoadingFailed, undefined)
        }
      } else if (errorResponse.code === 404) {
        return ARfxError(errInfoLoadingFailed, undefined)
      } else {
        return ARfxError(errInfoLoadingFailed, undefined)
      }
    } else {
      return ARfxError(errInfoLoadingFailed, undefined)
    }
  } catch (error) {
    return ARfxError(errInfoLoadingFailed, undefined)
  }
}

const getNetworkError = () => {
  const errInfoLoadingFailed = 'Network error. Please try again later'
  return ARfxError(errInfoLoadingFailed, undefined)
}

const getUnHandledError = () => {
  const errInfoLoadingFailed = 'An error occurred. Please try again later'
  return ARfxError(errInfoLoadingFailed, undefined)
}

export const ErrorHandler = {
  getUnHandledError,
  getNetworkError,
  getServerError,
  ErrorEnum
}
