import { Platform } from 'react-native'


export const isAndroid = (): boolean => Platform.OS === 'android'
export const isIOS = (): boolean => Platform.OS === 'ios'
export const isWeb = (): boolean => Platform.OS === 'web'

export const getPlatform = (): string => Platform.OS

export default {
  isAndroid,
  isIOS,
  isWeb
}
