
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { SocialLogin } from '../constants'
import { RootState } from '../reducer'
import { actions } from './actions'
import {
  ISignInComponentDispatchProps,
  ISignInComponentStateProps,
  SignIn,
} from './signIn.component'

interface OwnProps {
  componentId: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<ISignInComponentStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const { userStatus } = state.home
  return {
    userStatus
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<ISignInComponentDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onSignInAction: (loginId: string, password: string) => {
    dispatch(actions.loginRequest(loginId, password))
  },
  onSocialLoginAction: (socialLoginId: SocialLogin) => {
    // alert(socialLoginId)
    alert('socialLoginId: ' + socialLoginId)
  }
})

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)
