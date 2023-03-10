import { StackScreenProps } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser'
import { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from 'src/utils/firebase/firebase.utils';
import Button from '../components/button/Button'
import LoadingScreen from './LoadingScreen';

export const isAndroid = () => Platform.OS === 'android'

WebBrowser.maybeCompleteAuthSession()

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpScreen: React.FC<StackScreenProps<any>> = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        alert('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (name, value) => {
    setFormFields({ ...formFields, [name]: value });
  };

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
        <Button 
          onPress={() => {}}
          buttonType='google'  
          title='Sign up with Google'
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
