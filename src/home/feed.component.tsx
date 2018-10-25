import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { ButtonIdEnum, setCustomTopBar } from '@src/utils/navigationController'

import {RootContainer} from './root'

export interface IFeedComponentStateProps {
  isOpened: boolean
}

// NOTE: Component must not know what will happen when button pressed.
// just passing event to parent (container) and container handles the event by emitting action of Redux.
export interface IFeedComponentDispatchProps {
  onTapOnNavigationButton: (isDrawerOpened: boolean) => void
}

interface IFeedProps extends IFeedComponentStateProps, IFeedComponentDispatchProps {}

export class Feed extends React.Component<IFeedProps, any> {
  static get options() {
    return setCustomTopBar(ButtonIdEnum.Menu, 'Discover')
  }

  private static isDrawerOpened: boolean = false

  constructor(props: IFeedProps) {
    super(props)
    this.state = {}
    Navigation.events().bindComponent(this)
  }

  componentDidAppear() {}

  navigationButtonPressed({ buttonId }: any) {
    this.props.onTapOnNavigationButton(this.props.isOpened)
  }

  public render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <RootContainer/>
        <Text>Feed Screen</Text>
      </View>
    )
  }
}
