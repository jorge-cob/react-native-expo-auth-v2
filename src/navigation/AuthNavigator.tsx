import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignOutScreen from '../screens/SignUpScreen'

export type AuthNavigatorParamList = {
  SignUp: undefined
  SignIn: undefined
  Welcome: undefined
}


const Stack = createStackNavigator<AuthNavigatorParamList>()

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}