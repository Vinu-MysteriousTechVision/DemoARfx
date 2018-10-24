
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { SocialLogin } from '../constants'
import { RootState } from '../reducer'
import { actions } from './actions'
import {
  ISignInActionResponseComponentDispatchProps,
  ISignInActionResponseComponentStateProps,
  SignInActionResponse,
} from './signInActionResponse.component'

interface OwnProps {}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<ISignInActionResponseComponentStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  return {}
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<ISignInActionResponseComponentDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({})

export const SignInActionResponseContainer = connect(mapStateToProps, mapDispatchToProps)(SignInActionResponse)
