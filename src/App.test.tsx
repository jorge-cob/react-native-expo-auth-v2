import { render } from '@testing-library/react-native'
import App from './App'


describe('<App />', () => {
  it('renders correctly', () => {
    const tree = render(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

