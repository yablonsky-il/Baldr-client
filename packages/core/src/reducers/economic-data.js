import { handleActions } from 'redux-actions';

import {
  fetchEconomicData,
  setEconomicData,
  clearEconomicData,
} from '../actions/economic-data';

const getInitialState = () => ({
  isInProgress: false,
  isFetched: false,
  data: null,
});

export const economicData = handleActions({
  [fetchEconomicData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setEconomicData]: (state, { payload }) => ({
    ...state,
    isInProgress: false,
    isFetched: true,
    data: payload,
  }),
  [clearEconomicData]: getInitialState,
}, getInitialState());
