import { createActions } from 'redux-actions';

export const {
  sendAuthenticationData,
  setAuthenticationStatus,
} = createActions(
  'SEND_AUTHENTICATION_DATA',
  'SET_AUTHENTICATION_STATUS',
);
