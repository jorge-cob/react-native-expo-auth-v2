import { USER_ACTION_TYPES } from './user.types';
import { ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils';
import { UserData } from 'src/utils/firebase/firebase.utils';


export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export const setCurrentUser = (user: UserData): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
