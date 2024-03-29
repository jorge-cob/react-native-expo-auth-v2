import { StackScreenProps } from '@react-navigation/stack'
import { FirebaseError } from '@firebase/util'
import { useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { UserCredential } from 'firebase/auth'

import LoadingScreen from './LoadingScreen'
import { SignUpProps } from './types'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import Button from '../components/button/Button'
import { AuthNavigatorParamList } from '../navigation/types'


WebBrowser.maybeCompleteAuthSession()

const INITIAL_FORM_FIELD_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

type Props = StackScreenProps<AuthNavigatorParamList, 'SignUp'>

const SignUpScreen: React.FC<Props> = () => {
  const [formFields, setFormFields] = useState<SignUpProps>(INITIAL_FORM_FIELD_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(INITIAL_FORM_FIELD_STATE)
  };

  const handleSubmit: () => void = async () => {

    if(!password || !confirmPassword) {
      alert('Please enter password')
      return
    }
    if(password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if(!email || !displayName) {
      alert('Please enter email and display name')
      return
    }

    try {
      setIsLoading(true);
      const { user }: UserCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      )
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code)
      }
    }
  }

  const handleChange = (name: string, value: string): void => {
    setFormFields({ ...formFields, [name]: value })
  }

  if(isLoading) { return <LoadingScreen /> }
   
  return (
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
            onChangeText={val => handleChange('displayName', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B1B1B1"
            returnKeyType="next"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={val => handleChange('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#B1B1B1"
            returnKeyType="done"
            textContentType="newPassword"
            secureTextEntry={true}
            value={password}
            onChangeText={val => handleChange('password', val)}
          />
           <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#B1B1B1"
            returnKeyType="done"
            textContentType="newPassword"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={val => handleChange('confirmPassword', val)}
          />
        </View>
        <Button 
          onPress={handleSubmit}
          title='Sign up'
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

export default SignUpScreen
