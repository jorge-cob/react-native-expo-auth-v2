export type SignInProps = {
  email: string
  password: string
}

export interface SignUpProps extends SignInProps {
  displayName: string
  confirmPassword: string
}