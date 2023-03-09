import { ViewStyle, TextStyle } from 'react-native/types'

export type ButtonProps = {
  buttonType?: 'google' | 'inverted' | undefined
  children: string
  onPress: () => void
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
}
