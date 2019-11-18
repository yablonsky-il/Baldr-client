import { createActions } from 'redux-actions';
import * as R from 'ramda';

import { history } from '../client/history';
import { HTTP_CODES } from '../constants';
import { logError } from '../helpers/error-logger';

const getStatus = R.prop('status');
const isStatusNotFound = R.compose(R.equals(HTTP_CODES.HTTP_CODE_NOT_FOUND), getStatus);
const isStatusMovedPermanently = R.compose(R.equals(HTTP_CODES.MOVED_PERMANENTLY), getStatus);
const getIsNotFound = R.ifElse(R.isNil, R.F, isStatusNotFound);
const getRedirectUrl = R.ifElse(isStatusMovedPermanently, R.prop('redirectUrl'), R.always(''));

export const {
  globalError,
  clearError,
} = createActions(
  {
    GLOBAL_ERROR: (errorId, error) => {
      if (error) {
        logError(error);
      }

      return {
        error: errorId,
        is404: getIsNotFound(error),
        redirectUrl: getRedirectUrl(error),
      };
    },
    REDIRECT_TO_HOME: () => {
      // TODO: history.push not rerender after redirect
      history.push('/');
    },
  },
  'CLEAR_ERROR',
);
