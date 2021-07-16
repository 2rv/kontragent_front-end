import { SETTINGS_PASSWORD_FIELD_NAME } from './settings-password.type';

import { validate } from '../../main/validate';

import {
  required,
  password,
  passwordRepeat,
} from '../../main/validate/validate.service';

const config = {
  [SETTINGS_PASSWORD_FIELD_NAME.NEW_PASSWORD]: [required, password],
  [SETTINGS_PASSWORD_FIELD_NAME.REPEAT_NEW_PASSWORD]: [
    required,
    passwordRepeat([SETTINGS_PASSWORD_FIELD_NAME.NEW_PASSWORD]),
  ],
  [SETTINGS_PASSWORD_FIELD_NAME.OLD_PASSWORD]: [required, password],
};

export const settingsFormChangePasswordValidation = (values) =>
  validate(values, config);
