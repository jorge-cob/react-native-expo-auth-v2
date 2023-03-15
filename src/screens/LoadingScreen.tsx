import { ActivityIndicator, StyleSheet, View } from 'react-native'


function LoadingScreen(): React.ReactElement {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LoadingScreen
