import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ButtonProps } from './types'


const Button: React.FC<ButtonProps>  = ({ title, buttonType, style, textStyle, ...otherProps }) => {
  return (
    <TouchableOpacity {...otherProps} style={[styles.base, buttonType ? styles[buttonType] : null, style]}>
      <Text style={[ styles.baseText, buttonType === 'inverted' && styles.invertedText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: 'white',
    height: 36,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 'auto'
  },
  logo: {
    width: 20,
    height: 20,
  },
  base: {
    flexDirection: 'row', 
    alignItems: 'center',
    height: 38,
    marginTop: 10,
    paddingRight: 35,
    paddingLeft: 35,
    backgroundColor: 'black',
    border: 'none',
    justifyContent: 'center',
    borderRadius: 5,
    width: 240
  },
  inverted: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  baseText: {
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'white'
  },
  invertedText: {
    color: 'black'
  }
})
