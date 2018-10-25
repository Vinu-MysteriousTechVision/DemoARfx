import React, { Component } from 'react'
import { View } from 'react-native'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { RootState } from '../reducer'

import {actions} from '../drawer'

import { screenName } from '@src/navigation'
import { Navigation } from 'react-native-navigation'

export class Root extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        Navigation.events().registerComponentDidAppearListener(({componentId, componentName}: any) => {
            if (screenName.DRAWER === componentName) {
              this.props.isDrawerOpenedActions(true)
            } else if (screenName.Feed === componentName) {
              this.props.isDrawerOpenedActions(false)
            }
          }
        )

        Navigation.events().registerComponentDidDisappearListener(({componentId, componentName}: any) => {
            if (screenName.DRAWER === componentName) {
              this.props.isDrawerOpenedActions(false)
            }
          }
        )

        Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
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
        })
    }

    public render() {
      return(<View/>)
    }
}

interface OwnProps {}

const mapStateToProps: MapStateToProps<any, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
    return {}
}

const mapDispatchToProps: MapDispatchToProps<any, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  isDrawerOpenedActions: (isOpened: boolean) => {
    dispatch(actions.isDrawerOpened({isOpened}))
  }
})

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root)
