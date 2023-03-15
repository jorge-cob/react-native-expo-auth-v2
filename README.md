# React Native with steroids app template 
## Expo - Typescript - Firebase auth -  Redux - React Native Web 


This is the second iteration of a project I started 2 years ago ( https://github.com/jorge-cob/react-native-expo-auth ) which has its own repository due to the significant changes in the project's structure and libraries that are to be used.


## Features

- Sign in or sign up into your app using email and password (other firebase supported authentication methods may be implemented) and navigate between screens.

## Tech

Cloud Task Manager uses a number of open source projects to work properly:
- [React Native] (https://github.com/facebook/react-native)
- [Expo](https://expo.io/) 
- [Typescript] (https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/) - Storage and database management.
- [React Redux](https://react-redux.js.org/) - State container.

## Configuration
 - Create a .env in your project's root and add the following lines for Firebase config:
``` FIREBASE_API_KEY=<Your firebase api key>
    FIREBASE_AUTH_DOMAIN=<Your firebase auth domain>
    FIREBASE_PROJECT_ID=<Your firebase project id>
    FIREBASE_STORAGE_BUCKET=<Your firebase storage bucket>
    FIREBASE_MESSAGING_SENDER_ID=<Your firebase message sender id>
    FIREBASE_APP_ID=<Your firebase app id>
```


## Pre-requisites

- Node LTS version
- Yarn 1.22.19 or above

  
## Scripts

```sh
yarn start
```
Runs your app in development mode.

```sh
yarn test
```
Test app using Jest and React Testing Library

## License

MIT

**Free Software, Hell Yeah!**
