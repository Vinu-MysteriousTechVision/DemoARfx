import _ from 'underscore'

export async function getHeader(isBeforeLogin: boolean) {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return header
}
