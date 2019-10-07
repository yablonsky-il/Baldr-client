import { handleActions } from 'redux-actions';

import {
  fetchEconomicData,
  setEconomicData,
  clearEconomicData,
} from '../actions/economic-data';

const getInitialState = () => ({
  isInProgress: false,
  isFetched: false,
  economicData: {
    date: null,
    data: null,
    indicator: null,
  },
});

export const macroEconomicData = handleActions({
  [fetchEconomicData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setEconomicData]: (state, { payload: { date, data, indicator } }) => ({
    ...state,
    isInProgress: false,
    isFetched: true,
    economicData: { date, data, indicator },
  }),
  [clearEconomicData]: getInitialState,
}, getInitialState());
