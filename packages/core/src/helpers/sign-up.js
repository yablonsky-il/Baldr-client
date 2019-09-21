/* eslint-disable no-useless-escape */
import { FORM } from '../constants';

const validateFormNameAndSurname = str => str.length > 1 ? 1 : 0;
const validateFormEmail = str => /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test(str) ? 1 : 0;
/**
 * From 8 to 15 characters which contain at least one lowercase letter,
 * one uppercase letter, one numeric digit, and one special character
 */
const validateFormPassword = str => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(str) ? 1 : 0;
const checkValue = (str, fn) => fn(str) ? 1 : 0;

export const validateSignUp = ({
  [FORM.NAME]: { value: name },
  [FORM.SURNAME]: { value: surname },
  [FORM.EMAIL]: { value: email },
  [FORM.PASSWORD]: { value: password },
}) => ({
  [FORM.NAME]: checkValue(name, validateFormNameAndSurname),
  [FORM.SURNAME]: checkValue(surname, validateFormNameAndSurname),
  [FORM.EMAIL]: checkValue(email, validateFormEmail),
  [FORM.PASSWORD]: checkValue(password, validateFormPassword),
});

export const validateSignIn = ({
  [FORM.EMAIL]: { value: email },
  [FORM.PASSWORD]: { value: password },
}) => ({
  [FORM.EMAIL]: checkValue(email, validateFormEmail),
  [FORM.PASSWORD]: password.length > 3 ? 1 : 0,
});
