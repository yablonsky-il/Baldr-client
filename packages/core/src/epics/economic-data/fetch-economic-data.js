import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import * as R from 'ramda';

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

const serializeData = (data, indicator) => {
  if (isEmptyOrNil(data)) {
    return { date: null, data: null };
  }

  const economicData = R.ifElse(
    interData => Array.isArray(interData),
    interData => interData,
    interData => R.compose(
      items => items.map((item, idx) => ({ ...item, id: R.inc(idx) })),
      R.flatten,
      R.values,
    )(interData),
  )(data[indicatorsKeys[indicator]]);

  return {
    date: data.date,
    data: economicData,
    indicator,
  };
};

export const fetchEconomicDataEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(fetchEconomicData),
  switchMap(({ payload: { indicator, date } }) => ajax({
    url: getEconomicDataByDate(indicator, date),
    method: 'GET',
  }).pipe(
    switchMap(({ response }) => R.compose(
      of,
      setEconomicData,
      serializeData,
    )(response[0], indicator))
  )),
  catchError((err) => {
    console.log(err, 'err economicValues');

    return of(null);
  })
);
