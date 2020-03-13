import { handleActions } from 'redux-actions';

import {
  fetchEconomicData,
  setEconomicData,
  setFetchStatus,
  clearEconomicData,
} from '../actions/economic-data';

const getInitialState = () => ({
  isInProgress: false,
  isFetched: false,
  status: { message: null, value: null },
  economicData: {
    date: null,
    data: null,
    indicator: null,
  },
});

export const macroEconomic = handleActions({
  [fetchEconomicData]: state => ({
    ...state,
    isInProgress: true,
  }),
  [setEconomicData]: (state, { payload }) => ({ // payload: { date: string, data: object, indicator: string }
    ...state,
    isInProgress: false,
    isFetched: true,
    economicData: { ...payload },
  }),
  [setFetchStatus]: (state, { payload }) => ({ // payload: string
    ...state,
    status: { ...payload },
  }),
  [clearEconomicData]: getInitialState,
}, getInitialState());
