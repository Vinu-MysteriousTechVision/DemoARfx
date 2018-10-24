import * as React from 'react'
import {
  Text,
  View,
} from 'react-native'
import { DrawerStyles } from './style'

export interface IDrawerHeaderStateProps {
  userName: string
  avatarUrl: any
}

export interface IDrawerHeaderDispatchProps {}

interface IDrawerHeaderComponentProps extends IDrawerHeaderStateProps, IDrawerHeaderDispatchProps {}

export const DrawerHeader: React.SFC<IDrawerHeaderComponentProps> = props => {
  return (
    <View style={DrawerStyles.headerContainer}>
      <Text style={DrawerStyles.headerText}>{props.userName}</Text>
    </View>
  )
}
