import { ViewStyle, TextStyle } from 'react-native/types'

export type ButtonProps = {
  buttonType?: 'inverted' | undefined
  title: string
  onPress: () => void
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
}
