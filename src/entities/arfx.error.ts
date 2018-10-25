import { IARfxError } from './entity.type'

export const ARfxError = (message: string, code: number): IARfxError => {
  return {
    message,
    code
  }
}
