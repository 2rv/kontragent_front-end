import { validate } from '../../main/validate';

import { SIGNUP_FIELD_NAME } from './signup.type';

import {
  login,
  password,
  passwordRepeat,
  email,
  required,
} from '../../main/validate/validate.service';

const config = {
  [SIGNUP_FIELD_NAME.LOGIN]: [required, login],
  [SIGNUP_FIELD_NAME.EMAIL]: [required, email],
  [SIGNUP_FIELD_NAME.CAPTCHA]: [required],
  [SIGNUP_FIELD_NAME.PASSWORD]: [required, password],
  [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat([SIGNUP_FIELD_NAME.PASSWORD]),
  ],
};

export const signupFormValidation = (values) => validate(values, config);
