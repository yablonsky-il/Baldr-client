import * as R from 'ramda';

const str = 'qaz1wsx2edc3rf4vt5gby6hn7uj8mi9k,ol0.p;[]';

export const randomNumber = () => Math.floor(Math.random() * (str.length - 5) + 3);
export const isEmptyOrNil = R.anyPass([R.isNil, R.isEmpty]);

export const randomizer = () => {
  const randomValue = randomNumber();
  let result = '';

  for (let i = 0; i < randomValue; i += 1) {
    result += str.charAt(randomNumber());
  }

  return result;
};

const checkDateValue = value => value.length > 1 ? value : `0${value}`;
const getJSDate = momentDate => R.isNil(momentDate._d) ? momentDate : momentDate._d;

export const getDate = (momentDate) => {
  const date = getJSDate(momentDate);

  const day = checkDateValue(date.getDate().toString());
  const month = checkDateValue(R.inc(date.getMonth()).toString());
  const year = date.getFullYear().toString();

  return { day, month, year };
};
