import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoadingScreen from '../screens/LoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

export type AuthNavigatorParamList = {
  SignUp: undefined
  SignIn: undefined
  Loading: undefined
}

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
