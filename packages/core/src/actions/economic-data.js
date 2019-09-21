import { createActions } from 'redux-actions';

export const {
  fetchEconomicData,
  setEconomicData,
  clearEconomicData,
} = createActions(
  'FETCH_ECONOMIC_DATA',
  'SET_ECONOMIC_DATA',
  'CLEAR_ECONOMIC_DATA',
);
