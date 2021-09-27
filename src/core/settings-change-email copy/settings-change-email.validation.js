import { validate } from '../../main/validate';

import { SETTINGS_CHANGE_EMAIL_DATA_NAME } from './settings-change-email.constant';

import {
  password,
  required,
  email,
} from '../../main/validate/validate.service';

const config = {
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD]: [required],
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL]: [required, email],
};

export const settingsChangeEmailFormValidation = (values) =>
  validate(values, config);
