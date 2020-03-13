import { handleActions } from 'redux-actions';
import {
  globalError,
  clearError,
} from '../actions/system';
import { ERRORS } from '../constants';

export const initialState = () => ({
  globalError: {},
  restrictions: null,
  settings: null,
  marks: null,
});

export const system = handleActions(
  {
    [globalError]: (state, {
      payload: {
        error = ERRORS.UNDEFINED,
        is404,
        redirectUrl,
      },
    }) => ({
      ...state,
      globalError: {
        errorId: error,
        is404,
        redirectUrl,
      },
    }),
    [clearError]: state => ({
      ...state,
      globalError: initialState.globalError,
    }),
  },
  initialState(),
);
