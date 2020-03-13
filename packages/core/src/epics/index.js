import { combineEpics } from 'redux-observable';

import { signUpEpic } from './sign-up/sign-up';
import { signInEpic } from './sign-in/sign-in';
import { cookieAuthEpic } from './cookie-auth/cookie-auth';
import { signOutEpic } from './sign-out/sign-out';
import { fetchEconomicDataEpic } from './fetch-economic-data/fetch-economic-data';
import { fetchAllUsersEpic } from './fetch-all-users/fetch-all-users';

export const rootEpic = combineEpics(
  signUpEpic,
  signInEpic,
  cookieAuthEpic,
  signOutEpic,
  fetchEconomicDataEpic,
  fetchAllUsersEpic,
);
