import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as WebBrowser from 'expo-web-browser'
import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Button from '../components/google-button/button/Button'

import GoogleButton from '../components/google-button/google-button.component'
import { AuthNavigatorParamList } from '../navigation/AuthNavigator'

export const isAndroid = () => Platform.OS === 'android'

WebBrowser.maybeCompleteAuthSession()

type SignUpScreenProps = NativeStackScreenProps<AuthNavigatorParamList, 'SignUp'>

const SignUpScreen: React.FC<SignUpScreenProps> = (props) => {
  const navigation = useNavigation()

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#B1B1B1"
              returnKeyType="next"
              textContentType="name"
              value={displayName}
              onChangeText={(value) => setDisplayName(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#B1B1B1"
              returnKeyType="next"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#B1B1B1"
              returnKeyType="done"
              textContentType="newPassword"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity style={styles.signButton} onPress={() => {}}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <Button 
            onPress={() => {}}
          >
            Sign In
          </Button>

          <View style={styles.form}>
            <GoogleButton onPress={() => {}} color="#707070">
              Continue with Google
            </GoogleButton>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.switchInAndUpText} onPress={() => props.navigation.push('SignIn')}>
              Already have an account?
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '86%',
    marginTop: 15
  },
  input: {
    fontSize: 20,
    borderColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 1.5,
    marginTop: 25.5
  },
  signButton: {
    width: '86%',
    height: 38,
    marginTop: 10,
    backgroundColor: '#24A0ED',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  switchInAndUpText: {
    fontWeight: '200',
    fontSize: 17,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
})

export default SignUpScreen
