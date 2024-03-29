import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import Button from '../components/button/Button'
import { selectCurrentUser } from '../store/user/user.selector'
import { signOutUser } from '../utils/firebase/firebase.utils'


export default function HomeScreen(): React.ReactElement {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <View style={styles.container}>
      <Text>Welcome {currentUser?.email}!</Text>
      <Button title="Sign Out" style={styles.button} onPress={signOutUser} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
})
