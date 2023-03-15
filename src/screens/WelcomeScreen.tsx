import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Button from 'src/components/button/Button'
import { AuthNavigatorParamList } from 'src/navigation/AuthNavigator'

type Props = StackScreenProps<AuthNavigatorParamList, 'Welcome'>

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome screen!</Text>
      <View style={styles.buttons}>
        <Button title="Sign in" onPress={() => navigation.navigate('SignIn')} />
        <Button title="Sign up" buttonType="inverted" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
  },
})

export default WelcomeScreen
