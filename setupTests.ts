jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
)

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  remoteConfig: jest.fn(() => ({
    fetch: jest.fn(() => Promise.resolve()),
    activate: jest.fn(() => true),
    settings: jest.fn(),
    defaultConfig: jest.fn(),

  }))
}))

jest.mock('firebase/auth', () => ({
  initializeApp: jest.fn(),
  onAuthStateChanged: jest.fn(),
  getAuth: jest.fn()
}))

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  QueryDocumentSnapshot: jest.fn()
}))

jest.mock('@firebase/util', () => ({
  FirebaseError: jest.fn(() => ({
    code: 'auth/invalid-email',
    message: 'The email address is badly formatted.',
    name: 'FirebaseError',
    toString: () => 'The email address is badly formatted.'
  }))
}))

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  }
})
