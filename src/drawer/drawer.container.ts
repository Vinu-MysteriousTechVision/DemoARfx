import { Navigation } from 'react-native-navigation'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { DrawerMenuEnum } from '../constants'
import { RootState } from '../reducer'
import {
  Drawer,
  IDrawerDispatchProps,
  IDrawerStateProps,
} from './drawer.component'
import { MENU_SECTIONS } from './menuItems'

interface OwnProps {
  navigator: Navigator
  componentId: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<IDrawerStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  return {
    userName: 'John Doe',
    avatarUrl: '',
    menuSections: MENU_SECTIONS,
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<IDrawerDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => {
  return {
    onPressMenu: (id: DrawerMenuEnum) => {
      // Action to close the drawer
      Navigation.mergeOptions(ownProps.componentId, {
        sideMenu: {
          left: {
            visible: false,
          },
        },
      })
    },
  }
}

export const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(Drawer)
