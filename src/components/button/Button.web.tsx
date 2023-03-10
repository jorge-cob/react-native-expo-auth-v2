import { StyleSheet, Text, Pressable, PressableStateCallbackType, View, Image } from 'react-native'
import { ButtonProps } from './types';

type CallbackWithHovered = PressableStateCallbackType & { hovered?: boolean, focused?: boolean }

const Button = ({ title, buttonType, disabled, style, textStyle, ...otherProps }: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={(state: CallbackWithHovered ) => [
        styles.base,
        buttonType ? styles[buttonType] : null,
        style,
        !disabled && state.hovered && styles.hovered,
        !disabled && state.pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...otherProps} 
    >
      {buttonType === 'google' && (
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../assets/google-logo.png')} />
        </View>
      )}
      
      <Text style={[styles.text, buttonType && { color: 'white' }, disabled && styles.disabledText, textStyle]}>
        {title}
      </Text>
    </Pressable>
  )
};

export default Button;

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: 'white',
    height: 34,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
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
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3f3f3f7f',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    width: 240,
    marginTop: 30
  },
  inverted: {
    backgroundColor: 'black',
    border: '1px solid black',
  },
  google: {
    backgroundColor: '#4285f4',
    paddingLeft: 1
  },
  text: {
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black',
    left: 0
  },
  hovered: {
    backgroundColor: '#969595'
  },
  pressed: {

  },
  disabled: {
    borderColor: 'light-gray',
  },
  disabledText: {
    color: '#969595'
  }
})