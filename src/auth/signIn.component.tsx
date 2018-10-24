import React, { Component } from 'react'
import {
  // Image,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TextInputProperties,
  TextInputStatic,
  TouchableHighlight,
  View
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import Image from 'react-native-remote-svg'

import {CustomButton} from '../commonScreens/custom.ButtonComponent'
import { SocialLogin } from '../constants'
import { Utils } from '../utils/utils'
import {isValidEmail, isValidPassword} from '../utils/validator'
import {SignInStyle} from './style'

import TextInputState from 'TextInputState'

export interface ISignInComponentStateProps {}

export interface ISignInComponentDispatchProps {
  onSignInAction: (loginId: string, password: string) => void
  onSocialLoginAction: (socialLoginId: SocialLogin) => void
}

interface ISignInProps extends ISignInComponentStateProps, ISignInComponentDispatchProps {}

type NameType = 'loginId' | 'password'
type FormState = { [name in NameType]: string }

type FormValidationType = 'isValidLogiId' | 'isValidPasswordValue'
type FormValidationMessageType = 'logiIdErrorMessage' | 'passwordErrorMessage'

interface FormValidationState {
  isValid: {[name in FormValidationType]: boolean}
  errorMessage: {[name in FormValidationMessageType]: string}
}

type TextInputField = React.Component<TextInputProperties, React.ComponentState> & TextInputStatic

interface ILoginState {
  form: FormState
  formValidation: FormValidationState
}

enum FormField {
  LoginId = 1,
  Password
}

export class SignIn extends React.Component<ISignInProps, ILoginState> {
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
    loginId: null,
    password: null
  }

  constructor(props: ISignInProps) {
    super(props)
    this.state = {
      form: {
        loginId: '',
        password: ''
      },
      formValidation: {
        isValid: {
          isValidLogiId: true,
          isValidPasswordValue: true
        },
        errorMessage: {
          logiIdErrorMessage: '',
          passwordErrorMessage: ''
        }
      }
    }
    this.onSignIn = this.onSignIn.bind(this)
    this.onSocialLogin = this.onSocialLogin.bind(this)
  }

  private isAllFormFieldValid = (loginId: string, password: string): boolean => {
    // NOTE Check the presence of login Id and password in the field
    if (!isValidEmail(loginId) || !isValidPassword(password)) {
      return false
    }
    return true
  }

  private onChangeLoginIdTextinput = (text: string) => {
    this.setState({
      form: {
        ...this.state.form,
        loginId: text
      }
    })
    if (!isValidEmail(text) && text !== '') {
        this.setState({
          formValidation: {
            ...this.state.formValidation,
            isValid: {
              ...this.state.formValidation.isValid,
              isValidLogiId: false
            }
          }
        })
    } else {
      this.setState({
        formValidation: {
          ...this.state.formValidation,
          isValid: {
            ...this.state.formValidation.isValid,
            isValidLogiId: true
          }
        }
      })
    }
  }

  private onChangePWDTextinput = (text: string) => {
    this.setState({
      form: {
        ...this.state.form,
        password: text
      }
    })
    if (!isValidPassword(text) && text !== '') {
        this.setState({
          formValidation: {
            ...this.state.formValidation,
            isValid: {
              ...this.state.formValidation.isValid,
              isValidPasswordValue: false
            }
          }
        })
    } else {
      this.setState({
        formValidation: {
          ...this.state.formValidation,
          isValid: {
            ...this.state.formValidation.isValid,
            isValidPasswordValue: true
          }
        }
      })
    }
  }

  private getValidateMessage = (formField: FormField): string => {
    const {isValidLogiId, isValidPasswordValue} = this.state.formValidation.isValid
    switch (formField) {
      case FormField.LoginId:
        if (isValidLogiId) {
          return ''
        } else {
          return 'Email Id is not valid'
        }
      case FormField.Password:
        if (isValidPasswordValue) {
          return ''
        } else {
          return 'Password is not valid'
        }
      default:
        return ''
    }
  }

  private focusNextField = (nextField: TextInputField | null) => () => {
    if (nextField !== null) {
      nextField.focus()
    }
  }

  private get isFillAllRequiredField(): boolean {
    const { loginId, password } = this.state.form
    if (loginId !== '' && password !== '') {
      return true
    }
    return false
  }

  private onSignIn = () => {
    Keyboard.dismiss()
    TextInputState.blurTextInput(TextInputState.currentlyFocusedField())

    const { loginId, password } = this.state.form
    if (!this.isFillAllRequiredField || !this.isAllFormFieldValid(loginId, password)) {
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'SIGN_IN_ACTION_RESPONSE',
              passProps: {
                text: 'stack with one child'
              },
              options: {
                layout: {
                  backgroundColor: 'transparent',
                  orientation: ['portrait', 'landscape'] // An array of supported orientations
                },
                modalPresentationStyle: 'overCurrentContext',
                topBar: {
                  title: {
                    text: 'Modal'
                  }
                }
              }
            }
          }]
        }
      })
      return
    }
    this.props.onSignInAction(loginId, password)

    this.setState({
      form: {
        loginId: '',
        password: ''
      }
    })
  }

  private onSocialLogin(id: any) {
    const { onSocialLoginAction } = this.props
    onSocialLoginAction(id)
  }

  public render() {
    const { loginId, password } = this.state.form

    return (
      <View style={SignInStyle.container}>
        {/* <StatusBar backgroundColor='#1A2A39' barStyle='light-content'/> */}
        <View style={{ backgroundColor: '#FFFFFF', height: Utils.getStatusBarHeight()}}/>
        <KeyboardAwareScrollView
          style={SignInStyle.container}
          scrollEnabled={true}
          enableAutomaticScroll={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
          keyboardShouldPersistTaps={'always'}
          enableOnAndroid={true}
        >
          <View style={SignInStyle.signInFormContainer}>
            <Text style={{fontSize: 24, color: '#474746', fontFamily: 'Unica One', fontWeight: 'normal'}}>Sign In</Text>
            <TextInput
              ref={(refObj: TextInputField) => {
                this.formRef.loginId = refObj
              }}
              style={[SignInStyle.textInput, {marginTop: 64}]}
              placeholder='Email address'
              onChangeText={this.onChangeLoginIdTextinput}
              value={loginId}
              maxLength={100}
              returnKeyType='next'
              returnKeyLabel='Next'
              keyboardType='email-address'
              blurOnSubmit={false}
              onSubmitEditing={this.focusNextField(this.formRef.password)}
            />
            <View style={SignInStyle.textInputUnderline} />
            <Text style={{height: 30, alignSelf: 'flex-start', color: 'red', paddingTop: 10}}>{this.getValidateMessage(FormField.LoginId)}</Text>
            <TextInput
              ref={(refObj: TextInputField) => {
                this.formRef.password = refObj
              }}
              style={[SignInStyle.textInput, {marginTop: 48}]}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={this.onChangePWDTextinput}
              value={password}
              maxLength={255}
              returnKeyType='done'
              returnKeyLabel='Done'
              onSubmitEditing={this.onSignIn}
              blurOnSubmit={true}
            />
            <View style={SignInStyle.textInputUnderline} />
            <Text style={{ height: 30, alignSelf: 'flex-start', color: 'red', paddingTop: 10}}>{this.getValidateMessage(FormField.Password)}</Text>
            <CustomButton disabled={false} buttonStyle={{marginTop: 64}} title='Sign In' onPressAction={this.onSignIn} />
          </View>
          <View style={SignInStyle.signInWithContainer}>
            <Text style={SignInStyle.signInWithTitle}>Sign In With</Text>
            <View style={SignInStyle.socialLoginContainer} >
              <SocialLoginButtonComponent buttonId={SocialLogin.Facebook} title='Facebook' icon={require('../res/images/facebook.png')} onButtonAction={this.onSocialLogin}/>
              <SocialLoginButtonComponent buttonId={SocialLogin.Google} title='Google' icon={require('../res/images/google.png')} onButtonAction={this.onSocialLogin}/>
              <SocialLoginButtonComponent buttonId={SocialLogin.Twitter} title='Twitter' icon={require('../res/images/twitter.png')} onButtonAction={this.onSocialLogin}/>
            </View>
          </View>
          <View style={SignInStyle.signUpActionContainer}>
            <TouchableHighlight
              style={{ width: 50, height: 56, justifyContent: 'center', alignItems: 'center'}}
              onPress={() =>{alert('message')}}
              underlayColor='#FFFFFF00'
            >
              <Image style={{height: 24, width: 24}} source={require('../res/images/icon__switch_page_normal.svg')} />
            </TouchableHighlight>
            <View style={{ flex: 1, height: 56, justifyContent: 'center', alignItems: 'center'}} >
              <Text style={{color: '#FFFFFF'}}>SignUpActionContainer</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
