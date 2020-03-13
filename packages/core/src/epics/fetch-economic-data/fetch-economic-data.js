import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as R from 'ramda';

import { SNACKBAR_VARIANTS } from '../../constants';
import { isEmptyOrNil } from '../../helpers/util';

import {
  fetchEconomicData,
  setEconomicData,
  setFetchStatus,
} from '../../actions/economic-data';
import { getUrlEconomicDataByDate } from '../../api/api';

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

const serializeData = (economicData, indicator) => {
  if (isEmptyOrNil(economicData)) {
    return { date: null, data: null, indicator };
  }

  const serializedData = R.ifElse(
    economicValues => Array.isArray(economicValues),
    economicValues => economicValues.map((economicValue, idx) => ({ ...economicValue, id: R.inc(idx) })),
    economicValues => R.compose(
      economicValues => economicValues.map((economicValue, idx) => ({ ...economicValue, id: R.inc(idx) })),
      R.flatten,
      R.values,
    )(economicValues),
  )(economicData[indicatorsKeys[indicator]]);

  return {
    date: economicData.date,
    data: serializedData,
    indicator,
  };
};

export const fetchEconomicDataEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(fetchEconomicData),
  // map((action) => {
  //   setFetchStatus({ message: null, value: null });

  //   return action;
  // }),
  switchMap(({ payload: { indicator, date } }) => ajax({
    url: getUrlEconomicDataByDate(indicator, date),
    method: 'GET',
  }).pipe(
    switchMap(({ response }) => R.compose(
      values => of(
        setEconomicData(values),
        isEmptyOrNil(values.data)
          ? setFetchStatus({ message: 'Data doesn"t received', value: SNACKBAR_VARIANTS.WARNING })
          : setFetchStatus({
            message: `${indicator[0].toUpperCase()}`.concat(`${indicator.slice(1, Infinity)} received succesfully`),
            value: SNACKBAR_VARIANTS.SUCCESS,
          })
      ),
      serializeData,
    )(response[0], indicator))
  )),
  catchError((err) => {
    console.log(err, 'err economicValues');

    return of(null);
  })
);
