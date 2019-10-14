import { createActions } from 'redux-actions';

export const {
  fetchAllUsers,
  setAllUsers,
  clearAllUsers,
} = createActions(
  'FETCH_ALL_USERS',
  'SET_ALL_USERS',
  'CLEAR_ALL_USERS',
);
