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
  },
});

export const macroEconomicData = handleActions({
  [fetchEconomicData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setEconomicData]: (state, { payload: { date, data } }) => ({
    ...state,
    isInProgress: false,
    isFetched: true,
    economicData: { date, data },
  }),
  [clearEconomicData]: getInitialState,
}, getInitialState());