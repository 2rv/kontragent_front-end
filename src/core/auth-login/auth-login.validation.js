import { validate } from '../../main/validate';

import { AUTH_LOGIN_DATA_NAME } from './auth-login.constant';

import { password, required } from '../../main/validate/validate.service';

const config = {
  [AUTH_LOGIN_DATA_NAME.LOGIN]: [required],
  [AUTH_LOGIN_DATA_NAME.PASSWORD]: [required, password],
};

export const authLoginFormValidation = (values) => validate(values, config);
