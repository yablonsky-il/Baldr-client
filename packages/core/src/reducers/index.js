import { combineReducers } from 'redux';

import { modals } from './modals';
import { notifications } from './notifications';
import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { userProfile } from './profile';
import { macroEconomic } from './macro-economic';
import { webMessenger } from './web-messenger';

export const rootReducer = combineReducers({
  modals,
  notifications,
  signUp,
  signIn,
  userProfile,
  macroEconomic,
  webMessenger,
});
