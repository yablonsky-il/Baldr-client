import { handleActions } from 'redux-actions';

import {
  sendAuthenticationData,
  setAuthenticationStatus,
} from '../actions/sign-in';

const initialState = {
  isInProgress: false,
  status: null,
  message: null,
};

export const signIn = handleActions({
  [sendAuthenticationData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setAuthenticationStatus]: (state, { payload: { status, message } }) => ({
    ...state,
    isInProgress: false,
    status,
    message,
  }),
}, initialState);
