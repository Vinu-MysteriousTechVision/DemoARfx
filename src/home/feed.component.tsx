import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { screenName } from '@src/navigation'
import { ButtonIdEnum, setCustomTopBar } from '@src/utils/navigationController'

export interface IFeedComponentStateProps {
  userStatus: number
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

  private static isDrawerOpened: boolean = true

  constructor(props: IFeedProps) {
    super(props)
    this.state = {}
    Navigation.events().registerComponentDidAppearListener(({componentId, componentName}: any) => {
        if (screenName.DRAWER === componentName) {
          Feed.isDrawerOpened = true
        } else if (screenName.Feed === componentName) {
          Feed.isDrawerOpened = false
        }
      },
    )

    Navigation.events().registerComponentDidDisappearListener(({componentId, componentName}: any) => {
        if (screenName.DRAWER === componentName) {
          Feed.isDrawerOpened = false
        }
      }
    )
    Navigation.events().bindComponent(this)
  }

  componentDidAppear() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'SIGN_IN',
            passProps: {
              text: 'stack with one child',
            },
            options: {
              layout: {
                backgroundColor: 'transparent'
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

  }

  navigationButtonPressed({ buttonId }: any) {
    this.props.onTapOnNavigationButton(Feed.isDrawerOpened)
  }

  public render() {
    const { userStatus } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    )
  }
}
