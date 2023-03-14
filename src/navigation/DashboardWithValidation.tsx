import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserStack from './UserNavigator'
import AuthStack from './AuthNavigator'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'
import { setCurrentUser } from '../store/user/user.action'
import { selectCurrentUser } from '../store/user/user.selector'


export default function DashboardWithValidation() { 
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))

    })
    

    return unsubscribe
  }, [])

  const currentUser = useSelector(selectCurrentUser)

  return currentUser ? <UserStack /> : <AuthStack />
}
