/* eslint-disable no-useless-escape */
import { i18n } from '../lang';

const REQUIRED_TEXT_TID = 'VALIDATION.REQUIRED';

export const getError = (tid, values = {}) => i18n.t && i18n.t(tid, values);

export const minLength = (min) => (value) => {
  if (String(value).length < min) {
    return getError('VALIDATION.MIN_LENGTH', { min });
  }

  return null;
};

export const maxLength =
  (max) =>
  (value = '') => {
    if (String(value).length > max) {
      return getError('VALIDATION.MAX_LENGTH', { max });
    }

    return null;
  };

export const hasLetter = (value) => /[A-Za-z]/.test(value);
export const hasUpperCaseLetter = (value) => /[A-Z]/.test(value);
export const hasLowerCaseLetter = (value) => /[a-z]/.test(value);

export const hasSymbol = (value) => /[!@#$%^&*()_+?\-=]/.test(value);

// eslint-disable-next-line max-len
const EMAIL_EXP =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
export const email = (value) =>
  !EMAIL_EXP.test(value) ? getError('VALIDATION.EMAIL') : null;

// eslint-disable-next-line max-len
const PASSWORD_EXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const password = (value) =>
  !PASSWORD_EXP.test(value) ? getError('VALIDATION.PASSWORD') : null;

// eslint-disable-next-line max-len
const LOGIN_EXP = /^[A-z0-9_]{3,16}$/;
export const login = (value) =>
  !LOGIN_EXP.test(value) ? getError('VALIDATION.LOGIN') : null;

export const boolean = (value) =>
  !!value === false ? getError('VALIDATION.BOOLEAN') : null;

// eslint-disable-next-line max-len
const COMPANY_NAME_EXP = /^[а-яА-Я]+(([',. -][а-яА-Я ])?[а-яА-Я]*)*$/;
export const companyName = (value) =>
  !COMPANY_NAME_EXP.test(value) ? getError('VALIDATION.COMPANY_NAME') : null;

// eslint-disable-next-line max-len
const FIRST_NAME_EXP = /^[а-яА-Я]+(([',. -][а-яА-Я ])?[а-яА-Я]*)*$/;
export const firstname = (value) =>
  !FIRST_NAME_EXP.test(value) ? getError('VALIDATION.FIRST_NAME') : null;

// eslint-disable-next-line max-len
const LAST_NAME_EXP = /^[а-яА-Я]+(([',. -][а-яА-Я ])?[а-яА-Я]*)*$/;
export const lastname = (value) =>
  !LAST_NAME_EXP.test(value) ? getError('VALIDATION.LAST_NAME') : null;

// eslint-disable-next-line max-len
const PHONE_EXP =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;
export const phone = (value) =>
  !PHONE_EXP.test(value) ? getError('VALIDATION.PHONE') : null;

export const emailPhone = (value) => {
  if (value.indexOf('@') > 0) {
    return !EMAIL_EXP.test(value) ? getError('VALIDATION.EMAIL') : null;
  } else {
    return !PHONE_EXP.test(value) ? getError('VALIDATION.PHONE') : null;
  }
};

export const number = (value) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parseFloat(value))) {
    return getError('VALIDATION.NUMBER');
  }

  return null;
};

export const numberPositive = (value) => {
  const val = parseFloat(value);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(val) || val < 0) {
    return getError('VALIDATION.NUMBER_POSITIVE');
  }

  return null;
};

export const numberPositiveMin = (min) => (value) => {
  const val = parseFloat(value);
  if (val < min) {
    return getError('VALIDATION.NUMBER_POSITIVE_MIN', { min });
  }

  return null;
};

export const required = (value) => {
  if (!value) {
    return getError(REQUIRED_TEXT_TID);
  }

  return null;
};

export const requiredArray = (value = []) => {
  if (value.length === 0) {
    return getError(REQUIRED_TEXT_TID);
  }

  return null;
};

// eslint-disable-next-line max-len
const URL_EXP =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
export const url = (value) =>
  !URL_EXP.test(value) ? getError('VALIDATION.NOT_URL') : null;

export const passwordRepeat = (field) => (value, values) => {
  if (value !== values[field]) {
    return getError('VALIDATION.PASSWORD_REPEAT');
  }

  return null;
};

export const emailRepeat = (field) => (value, values) => {
  if (value !== values[field]) {
    return getError('VALIDATION.EMAIL_REPEAT');
  }

  return null;
};
