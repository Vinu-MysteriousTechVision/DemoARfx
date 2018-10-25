import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { IDrawerOpenedHandler } from './reducer'

import { RootState } from '@src/reducer'

const actionCreator = actionCreatorFactory()

const isDrawerOpened = actionCreator<IDrawerOpenedHandler>('Drawer/isDrawerOpened')

export const actions = {
  isDrawerOpened
}
