import { Action, combineReducers } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

// NOTE: takeExam() === { type: 'Home/TAKE_EXAM', payload: {} }
const takeExam = actionCreator<{}>('Home/TAKE_EXAM')

export const actions = {
  takeExam,
}
