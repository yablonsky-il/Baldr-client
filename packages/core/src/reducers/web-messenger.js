import { handleActions } from 'redux-actions';
import {
  fetchAllUsers,
  setAllUsers,
  clearAllUsers,
} from '../actions/fetch-all-users';

const getInitialState = () => ({
  isInProgress: false,
  isFetched: false,
  usersList: null,
});

export const webMessenger = handleActions({
  [fetchAllUsers]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setAllUsers]: (state, { payload: usersList }) => ({
    usersList,
    isFetched: true,
    isInProgress: false,
  }),
  [clearAllUsers]: getInitialState,
}, getInitialState());
