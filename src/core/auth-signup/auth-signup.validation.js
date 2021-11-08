import { validate } from '../../main/validate';

import { AUTH_SIGNUP_DATA_NAME } from './auth-signup.constant';

import {
  login,
  password,
  passwordRepeat,
  email,
  required,
  firstname,
  lastname,
  phone,
} from '../../main/validate/validate.service';

const config = {
  [AUTH_SIGNUP_DATA_NAME.LAST_NAME]: [required, lastname],
  [AUTH_SIGNUP_DATA_NAME.FIRST_NAME]: [required, firstname],
  [AUTH_SIGNUP_DATA_NAME.LOGIN]: [required, login],
  [AUTH_SIGNUP_DATA_NAME.EMAIL]: [required, email],
  [AUTH_SIGNUP_DATA_NAME.PASSWORD]: [required, password],
  [AUTH_SIGNUP_DATA_NAME.PHONE]: [required, phone],
  [AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat([AUTH_SIGNUP_DATA_NAME.PASSWORD]),
  ],
};

export const authSignupFormValidation = (values) => validate(values, config);
