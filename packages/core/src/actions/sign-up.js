import { createActions } from 'redux-actions';

export const {
  sendRegistrationData,
  setRegistrationStatus,
} = createActions(
  'SEND_REGISTRATION_DATA',
  'SET_REGISTRATION_STATUS',
);
