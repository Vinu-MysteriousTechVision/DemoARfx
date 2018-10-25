import React, { Component } from 'react'
import {
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
import {SignInStyle} from './style'

export interface ISignInActionResponseComponentStateProps {}
export interface ISignInActionResponseComponentDispatchProps {}

interface ISignInActionResponseProps extends ISignInActionResponseComponentStateProps, ISignInActionResponseComponentDispatchProps {
  componentId: any
}
interface ILoginState {}

type NameType = 'emailId'
type FormState = { [name in NameType]: string }
type TextInputField = React.Component<TextInputProperties, React.ComponentState> & TextInputStatic

interface ILoginState {
  form: FormState
}

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

  private formRef: { [name in keyof FormState]: TextInputField | null } = {
    emailId: null
  }

  constructor(props: ISignInActionResponseProps) {
    super(props)
    this.state = {
      form: {
        emailId: ''
      }
    }
  }

  closePage = () => {
    Navigation.dismissModal(this.props.componentId);
  }

  onSignIn = () => {

  }

  private onChangeLoginIdTextinput = (text: string) => {
    this.setState({
      form: {
        emailId: text
      }
    })
  }


  public render() {
    const {emailId} = this.state.form

    return (
      <View style={[ { flex: 1, backgroundColor: '#666666C9' }]}>
        <View style={{flex: 1, marginVertical: 59, marginHorizontal: 16, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 30, backgroundColor: '#FFFFFF'}}>
          <Text style={{marginTop: 64}}>FORGOT PASSWORD</Text>
          <Text style={{marginTop: 40}}>We will send you an email to reset your password to the following email ID:</Text>
          <TextInput
              ref={(refObj: TextInputField) => {
                this.formRef.emailId = refObj
              }}
              style={[SignInStyle.textInput, {marginTop: 64}]}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={this.onChangeLoginIdTextinput}
              value={emailId}
              maxLength={100}
              returnKeyType='done'
              returnKeyLabel='Done'
              onSubmitEditing={this.onSignIn}
              blurOnSubmit={true}
            />
          <View style={SignInStyle.textInputUnderline} />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image style={{height: 55, width: 55}} source={require('../res/images/icon__loading_indicator_normal.svg')} />
          </View>
          <CustomButton disabled={false} buttonStyle={{marginTop: 0}} title='Send' onPressAction={this.onSignIn} />
          <CustomButton disabled={false} buttonStyle={{marginTop: 24, marginBottom: 40}} title='Sign In' onPressAction={this.onSignIn} />
          <TouchableHighlight 
            style={{position: 'absolute', top: 16, right: 16,  height: 24, width: 24}}
            onPress={this.closePage}
            underlayColor= '#FFFFFF00'
          >
            <Image style={{height: 24, width: 24}} source={require('../res/images/icon__close_normal.svg')} />
          </TouchableHighlight>
        </View>
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
