import { AnyAction } from 'redux';
import { USER_ACTION_TYPES } from './user.types';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};


