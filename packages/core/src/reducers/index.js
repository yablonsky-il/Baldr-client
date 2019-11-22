import { combineReducers } from 'redux';

import { system } from './system';
import { modals } from './modals';
import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { userProfile } from './profile';
import { macroEconomic } from './macro-economic';
import { webMessenger } from './web-messenger';

export const rootReducer = combineReducers({
  system,
  modals,
  signUp,
  signIn,
  userProfile,
  macroEconomic,
  webMessenger,
});
