import { combineEpics } from 'redux-observable';

import { signUpEpic } from './sign-up/sign-up';
import { signInEpic } from './sign-in/sign-in';
import { cookieAuthEpic } from './cookie-auth/cookie-auth';
import { signOutEpic } from './sign-out/sign-out';
import { fetchEconomicDataEpic } from './economic-data/fetch-economic-data';

export const rootEpic = combineEpics(
  signUpEpic,
  signInEpic,
  cookieAuthEpic,
  signOutEpic,
  fetchEconomicDataEpic,
);
