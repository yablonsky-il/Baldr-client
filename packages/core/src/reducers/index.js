import { combineReducers } from 'redux';

import { signUp } from './sign-up';
import { signIn } from './sign-in';
import { userProfile } from './profile';
import { macroEconomicData } from './macro-economic-data';

export const rootReducer = combineReducers({
  signUp,
  signIn,
  userProfile,
  macroEconomicData,
});
