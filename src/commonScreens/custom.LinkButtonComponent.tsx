import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native'
import { FontStyles } from '../style'

export interface ICustomLinkButtonStateProps {
  title: string
}

export interface ICustomLinkButtonDispatchProps {
  onPressLinkAction: () => void
}

interface ICustomLinkButtonComponentProps
  extends ICustomLinkButtonStateProps,
    ICustomLinkButtonDispatchProps {
  linkStyle?: ViewStyle
}

export const CustomLinkButton: React.SFC<
  ICustomLinkButtonComponentProps
> = props => {
  const { linkStyle, title, onPressLinkAction } = props
  return (
    <View style={[CustomLinkButtonStyles.linkContainer, linkStyle]}>
      <TouchableHighlight
        onPress={onPressLinkAction}
        underlayColor="rgba(240, 240, 240, 0.6)"
      >
        <Text style={CustomLinkButtonStyles.linkText}>{title}</Text>
      </TouchableHighlight>
      <View style={CustomLinkButtonStyles.linkUnderline} />
    </View>
  )
}

export const CustomLinkButtonStyles = StyleSheet.create({
  linkContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  linkText: StyleSheet.flatten([
    FontStyles.fontW3,
    {
      height: 13,
      fontSize: 13,
      lineHeight: Platform.select({
        ios: 0,
        android: 15,
      }),
      textAlign: 'left',
      color: '#152940',
    },
  ]),
  linkUnderline: {
    justifyContent: 'center',
    backgroundColor: '#152940',
    height: 1,
  },
})
