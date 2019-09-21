import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { userProfile } from './profile';
import { economicData } from './economic-data';

export const rootReducer = combineReducers({
  signUp,
  signIn,
  userProfile,
  economicData,
});
