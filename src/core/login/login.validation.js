import { LOGIN_FIELD_NAME } from './login.type';

import { validate } from '../../main/validate';

import { required } from '../../main/validate/validate.service';

const config = {
  [LOGIN_FIELD_NAME.LOGIN]: [required],
  [LOGIN_FIELD_NAME.PASSWORD]: [required],
  [LOGIN_FIELD_NAME.CAPTCHA]: [required],
};

export const loginFormValidation = (values) => validate(values, config);
