import { FirebaseError } from '@firebase/util'
import { StackScreenProps } from '@react-navigation/stack'
import { useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import LoadingScreen from './LoadingScreen'
import { SignInProps } from './types'

import Button from '../components/button/Button'
import { signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils'
import { AuthNavigatorParamList } from '../navigation/types'


type Props = StackScreenProps<AuthNavigatorParamList, 'SignIn'>

WebBrowser.maybeCompleteAuthSession()

const INITIAL_FORM_FIELD_STATE = {
  email: '',
  password: ''
}

const SignInScreen: React.FC<Props> = () => {
  const [formFields, setFormFields] = useState<SignInProps>(INITIAL_FORM_FIELD_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(INITIAL_FORM_FIELD_STATE)
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
      setIsLoading(false)
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code)
     }
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormFields({ ...formFields, [name]: value })
  }

  if(isLoading) { return <LoadingScreen /> }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B1B1B1"
            returnKeyType="next"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(value) => handleChange('email', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#B1B1B1"
            returnKeyType="done"
            textContentType="newPassword"
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => handleChange('password', value)}
          />
        </View>
        <Button 
          onPress={handleSubmit}
          title='Sign in'
        /> 
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  switchInAndUpText: {
    fontWeight: '200',
    fontSize: 17,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
})

export default SignInScreen
