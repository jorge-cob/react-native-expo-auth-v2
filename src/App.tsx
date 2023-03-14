
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import DashboardWithValidation from './navigation/DashboardWithValidation'


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DashboardWithValidation />
      </PersistGate>
    </Provider>
  )
}
