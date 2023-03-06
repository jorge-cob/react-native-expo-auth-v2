import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Colors from '../assets/constants/theme/colors'
import DashboardWithValidation from './screens/DashboardWithValidation'

import HomeScreen from './screens/HomeScreen'

export default function App() {
  const { system } = Colors

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={system} />
      <SafeAreaProvider>
        <DashboardWithValidation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
