import { createActions } from 'redux-actions';

export const {
  fetchEconomicData,
  setEconomicData,
  setFetchStatus,
  clearEconomicData,
} = createActions(
  'FETCH_ECONOMIC_DATA',
  'SET_ECONOMIC_DATA',
  'SET_FETCH_STATUS',
  'CLEAR_ECONOMIC_DATA',
);
