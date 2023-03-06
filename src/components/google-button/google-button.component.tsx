import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type GoogleButtonProps = {
  color?: string
  backgroundColor?: string
  disabled?: boolean
  loading?: boolean
  textStyle?: any
  onPress: () => void
  children: string
}

const GoogleButton = (props: GoogleButtonProps) => {
  const { color, backgroundColor, disabled, loading, children } = props
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
          backgroundColor
        }
      ]}
    >
      {loading ? (
        <ActivityIndicator size={'small'} color={color} />
      ) : (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Image style={styles.logo} source={require('./google-logo.png')} />
          <Text style={[styles.label, { color }]}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default GoogleButton

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3f3f3f7f'
  },
  logo: {
    position: 'absolute',
    left: 70,
    width: 20,
    height: 20,
    marginRight: 20
  },
  label: {
    fontSize: 14,
    fontWeight: '600'
  }
})
