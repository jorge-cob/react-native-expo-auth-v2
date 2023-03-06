import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Homepage</Text>
        <Button title="Log Off" onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
