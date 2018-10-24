import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native'
import { FontStyles } from '../style'

export interface ICustomButtonStateProps {
  title: string
  disabled?: boolean
}

export interface ICustomButtonDispatchProps {
  onPressAction: () => void
}

interface ICustomButtonComponentProps extends ICustomButtonStateProps, ICustomButtonDispatchProps {
  buttonStyle?: ViewStyle
}

export const CustomButton: React.SFC<ICustomButtonComponentProps> = props => {
  const { buttonStyle, title, onPressAction, disabled } = props
  return (
    <View>
      {(disabled && (
        <View style={[ CustomButtonStyles.buttonContainer, buttonStyle, { backgroundColor: '#727fad' } ]}>
          <Text style={CustomButtonStyles.title}>{title}</Text>
        </View>
      )) || (
        <TouchableHighlight
          style={[CustomButtonStyles.buttonContainer, buttonStyle]}
          onPress={onPressAction}
          underlayColor='#586589'
        >
          <Text style={CustomButtonStyles.title}>{title}</Text>
        </TouchableHighlight>
      )}
    </View>
  )
}

CustomButton.defaultProps = {
  disabled: false
}

export const CustomButtonStyles = StyleSheet.create({
  buttonContainer: {
    width: 264,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#727fad'
  },
  title: StyleSheet.flatten([
    FontStyles.fontW6,
    {
      height: 16,
      fontSize: 16,
      lineHeight: Platform.select({
        ios: 0,
        android: 18
      }),
      textAlign: 'left',
      color: '#FFFFFF'
    }
  ])
})
