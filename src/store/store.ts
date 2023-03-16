import AsyncStorage from '@react-native-async-storage/async-storage'

import { compose, createStore, applyMiddleware, Middleware } from 'redux'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'


export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
].filter((middleware): middleware is Middleware => Boolean(middleware))

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
)

export const persistor = persistStore(store)
