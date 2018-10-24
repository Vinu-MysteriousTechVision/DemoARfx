'use strict'

import _ from 'underscore'

export function isValidEmail(email: string) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email === undefined || email.length <= 0 || !mailFormat.test(email)) {
    return false
  }
  return true
}

export function isValidPassword(password: string) {
  const passwordFormat = /^([a-zA-Z0-9]{6,32})$/
  if (password === undefined || password.length <= 0 || !passwordFormat.test(password)) {
    return false
  }
  return true
}

/*
 * Check the value is undefined, null or Empty
 */
export const isHaveValue = (value: any): boolean => {
  if (!_.isUndefined(value) && !_.isNull(value)) {
    if (_.isObject(value) && _.isEmpty(value)) {
      return false
    }
    return true
  }
  return false
}
