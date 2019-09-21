import { handleActions } from 'redux-actions';

import { setUserProfile, clearUserProfile } from '../actions/profile';
import { randomizer } from '../helpers/util';

const getInitialState = () => ({
  isAuthorized: false,
  name: null,
  surname: null,
  email: null,
});

export const userProfile = handleActions({
  [setUserProfile]: (state, { payload: { name, surname, email } }) => ({
    ...state,
    isAuthorized: true,
    name,
    surname,
    email,
    randomAvatar: randomizer(),
  }),
  [clearUserProfile]: getInitialState,
}, getInitialState());
