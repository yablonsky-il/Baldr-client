import { createActions } from 'redux-actions';

export const {
  setUserProfile,
  clearUserProfile,
} = createActions(
  'SET_USER_PROFILE',
  'CLEAR_USER_PROFILE',
);
