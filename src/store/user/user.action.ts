import { User } from 'firebase/auth'

import { USER_ACTION_TYPES } from './user.types'

import { ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils'
import { Maybe } from '../../../assets/types/Map'


export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  Maybe<User>
>

export const setCurrentUser = (user: Maybe<User>): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
