import { handleActions } from 'redux-actions';

import {
  sendRegistrationData,
  setRegistrationStatus,
} from '../actions/sign-up';

const initialState = {
  isInProgress: false,
  status: null,
  message: null,
};

export const signUp = handleActions({
  [sendRegistrationData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setRegistrationStatus]: (state, { payload: { status, message } }) => ({
    ...state,
    isInProgress: false,
    status,
    message,
  }),
}, initialState);
