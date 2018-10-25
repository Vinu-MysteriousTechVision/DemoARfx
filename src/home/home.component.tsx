import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { ButtonIdEnum, setCustomTopBar } from '@src/utils/navigationController'

export interface IHomeComponentStateProps {
  isOpened: boolean
}

// NOTE: Component must not know what will happen when button pressed.
// just passing event to parent (container) and container handles the event by emitting action of Redux.
export interface IHomeComponentDispatchProps {
  onTapOnNavigationButton: (isDrawerOpened: boolean) => void
}

interface IHomeProps extends IHomeComponentStateProps, IHomeComponentDispatchProps {}

export class Home extends React.Component<IHomeProps, any> {
  static get options() {
    return setCustomTopBar(ButtonIdEnum.Menu, 'Discover')
  }

  private static isDrawerOpened: boolean = true

  constructor(props: IHomeProps) {
    super(props)
    this.state = {}
    Navigation.events().bindComponent(this)
  }

  navigationButtonPressed({ buttonId }: any) {
    this.props.onTapOnNavigationButton(this.props.isOpened)
  }

  public render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}
