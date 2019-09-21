import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { isEmptyOrNil } from '../../helpers/util';

import {
  fetchEconomicData,
  setEconomicData,
} from '../../actions/economic-data';
import { getEconomicDataByDate } from '../../api/api';

const indicatorsKeys = {
  stocks: 'stocks',
  currency: 'currencies',
  inflation: 'inflations',
  commodities: 'commodities',
  'interest-rate': 'interestRate',
  'sales-tax-rate': 'salesTaxRate',
  'corruption-rank': 'corruptionRank',
  'corporate-tax-rate': 'corporateTaxRate',
  'government-debt-to-GDP': 'governmentDebtToGDP',
  'personal-income-tax-rate': 'personalIncomeTaxRate',
};

const serializeData = (data, key) => {
  if (isEmptyOrNil(data)) return [];

  return {
    date: data.date,
    economicData: data[indicatorsKeys[key]],
  };
};

export const fetchEconomicDataEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(fetchEconomicData),
  switchMap(({ payload: { indicator, date } }) => ajax({
    url: getEconomicDataByDate(indicator, date),
    method: 'GET',
  }).pipe(
    switchMap(({ response }) => {
      console.log(response, 'response');

      return of(setEconomicData(serializeData(response[0], indicator)));
    })
  )),
  catchError((err) => {
    console.log(err, 'err economicValues');

    return of(null);
  })
);
