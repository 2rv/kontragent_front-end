import { SETTINGS_EMAIL_FIELD_NAME } from './settings-email.type';

import { validate } from '../../main/validate';

import {
  required,
  email,
  password,
} from '../../main/validate/validate.service';

const config = {
  [SETTINGS_EMAIL_FIELD_NAME.EMAIL]: [required, email],
  [SETTINGS_EMAIL_FIELD_NAME.PASSWORD]: [required, password],
};

export const settingsFormChangeEmailValidation = (values) =>
  validate(values, config);
