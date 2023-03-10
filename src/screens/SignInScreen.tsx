import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native'
import Button from '../components/button/Button'
import { signInAuthUserWithEmailAndPassword } from 'src/utils/firebase/firebase.utils';
import LoadingScreen from './LoadingScreen';

export const isAndroid = () => Platform.OS === 'android'

WebBrowser.maybeCompleteAuthSession()

const defaultFormFields = {
  email: '',
  password: '',
};


const SignInScreen: React.FC<StackScreenProps<any>> = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      alert('user sign in failed', error);
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
        <Button 
          onPress={() => {}}
          buttonType='google'  
          title='Sign in with Google'
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
