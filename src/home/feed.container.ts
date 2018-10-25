
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { RootState } from '../reducer'
import { actions } from './actions'
import {
  Feed,
  IFeedComponentDispatchProps,
  IFeedComponentStateProps,
} from './feed.component'

interface OwnProps {
  componentId: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<IFeedComponentStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const { isOpened } = state.drawer
  return {
    isOpened
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<IFeedComponentDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onTapOnNavigationButton: (isDrawerOpened: boolean) => {
    if (Platform.OS === 'ios') {
      if (isDrawerOpened) {
        Navigation.mergeOptions(ownProps.componentId, {
          sideMenu: {
            left: {
              visible: false,
            },
          },
        })
      } else {
        Navigation.mergeOptions(ownProps.componentId, {
          sideMenu: {
            left: {
              visible: true,
            },
          },
        })
      }
    } else {
      Navigation.mergeOptions(ownProps.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      })
    }
  },
})

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed)
