import { StyleSheet, TouchableOpacity, Text } from 'react-native'

type ButtonProps = {
  buttonType?: 'google' | 'inverted' | undefined;
  children: string;
  onPress: () => void;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <TouchableOpacity {...otherProps} style={[styles.base, buttonType ? styles[buttonType] : null]}>
      <Text style={[styles.baseText, { color: buttonType === 'inverted' ? 'black' : 'white' }]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

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
  base: {
    width: 'auto',
    height: 38,
    marginTop: 10,
    lineHeight: 50,
    paddingRight: 35,
    paddingLeft: 35,
    fontSize: 15,
    backgroundColor: 'black',
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  inverted: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  google: {
    backgroundColor: '#4285f4',
  },
  baseText: {
    letterSpacing: 0.5,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

})