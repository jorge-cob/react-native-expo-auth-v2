import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { UserNavigatorParamList } from './types'

import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator<UserNavigatorParamList>()

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
