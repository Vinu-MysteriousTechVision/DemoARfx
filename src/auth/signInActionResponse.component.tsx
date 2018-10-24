import React, { Component } from 'react'
import {
  // Image,
  Text,
  TextInput,
  TextInputProperties,
  TextInputStatic,
  TouchableHighlight,
  View
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import Image from 'react-native-remote-svg'

import {CustomButton} from '../commonScreens/custom.ButtonComponent'
import { SocialLogin } from '../constants'
import {SignInStyle} from './style'

export interface ISignInActionResponseComponentStateProps {}
export interface ISignInActionResponseComponentDispatchProps {}

interface ISignInActionResponseProps extends ISignInActionResponseComponentStateProps, ISignInActionResponseComponentDispatchProps {
  componentId: any
}
interface ILoginState {}

export class SignInActionResponse extends React.Component<ISignInActionResponseProps, ILoginState> {
  // Navigation options
  static get options() {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false
      }
    }
  }

  constructor(props: ISignInActionResponseProps) {
    super(props)
  }

  closeModal = () => {
    // alert('closeModal')
    Navigation.dismissModal(this.props.componentId);
  }


  public render() {

    return (
      <View style={[ { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Popup View</Text>
        <TouchableHighlight onPress={this.closeModal} underlayColor='#FFFFFF00'>
        <Text
          style={{ height: 44, width: 150, fontFamily: 'Unica One', fontSize: 30, textAlign: 'center'}}
        >
            Close model
        </Text>
      </TouchableHighlight>

      </View>
    )
  }
}

const SocialLoginButtonComponent: React.SFC<any> = props => {
  const {buttonId, title, icon, onButtonAction} = props
  const buttonAction = () => {
    onButtonAction(buttonId)
  }
  return(
    <TouchableHighlight onPress={buttonAction} underlayColor='#FFFFFF'>
      <View style={SignInStyle.soicalLoginIconContainer}>
        <Image style={SignInStyle.socialLoginIcon} source={icon}/>
        <Text style={SignInStyle.socialLoginName}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}
