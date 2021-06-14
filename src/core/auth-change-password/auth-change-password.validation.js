import { AUTH_CHANGE_PASSWORD_FIELD_NAME } from './auth-change-password.type';

import { validate } from '../../main/validate';

import {
  required,
  password,
  passwordRepeat,
} from '../../main/validate/validate.service';

const config = {
  [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: [required, password],
  [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat([AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]),
  ],
};

export const authChangePasswordFormValidation = (values) =>
  validate(values, config);
