import * as React from 'react'
import {
  ScrollView,
  View,
} from 'react-native'
import { DrawerStyles } from './style'
import {
  DrawerHeader,
  IDrawerHeaderDispatchProps,
  IDrawerHeaderStateProps,
} from './drawer.header'
import {
  DrawerMenuList,
  IDrawerMenuListDispatchProps,
  IDrawerMenuListStateProps,
} from './drawer.menuList'

// creating a combination of multiple components interfaces.
export interface IDrawerStateProps extends IDrawerMenuListStateProps, IDrawerHeaderStateProps {}

// creating a combination of multiple components interfaces.
export interface IDrawerDispatchProps extends IDrawerMenuListDispatchProps, IDrawerHeaderDispatchProps {}

interface IDrawerProps extends IDrawerStateProps, IDrawerDispatchProps {}

export class Drawer extends React.Component<IDrawerProps, any> {
  constructor(props: IDrawerProps) {
    super(props)
  }

  public render() {
    const { onPressMenu, menuSections, userName } = this.props
    return (
      <View style={DrawerStyles.mainContainer}>
        <ScrollView>
          <DrawerHeader
            userName={userName}
            avatarUrl=''
          />
          <DrawerMenuList
            // Note that component use just object passed from container.
            onPressMenu={onPressMenu}
            menuSections={menuSections}
          />
        </ScrollView>
      </View>
    )
  }
}
