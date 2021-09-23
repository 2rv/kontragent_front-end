import { validate } from '../../main/validate';

import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME } from './auth-recovery-account-update-password.constant';

import {
  required,
  password,
  passwordRepeat,
} from '../../main/validate/validate.service';

const config = {
  [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE]: [required],
  [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD]: [
    required,
    password,
  ],
  [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat(AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD),
  ],
};

export const authRecoveryAccountUpdatePasswordFormValidation = (values) =>
  validate(values, config);
