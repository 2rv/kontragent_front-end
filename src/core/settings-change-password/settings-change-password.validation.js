import { validate } from '../../main/validate';

import { SETTINGS_CHANGE_PASSWORD_DATA_NAME } from './settings-change-password.constant';

import {
  password,
  required,
  passwordRepeat,
} from '../../main/validate/validate.service';

const config = {
  [SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD]: [required],
  [SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD]: [required, password],
  [SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT]: [
    required,
    password,
    passwordRepeat(SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD),
  ],
};

export const settingsChangePasswordFormValidation = (values) =>
  validate(values, config);
