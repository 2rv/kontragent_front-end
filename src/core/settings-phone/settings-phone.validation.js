import { SETTINGS_PHONE_FIELD_NAME } from './settings-phone.type';

import { validate } from '../../main/validate';

import {
  required,
  password,
  phone,
} from '../../main/validate/validate.service';

const config = {
  [SETTINGS_PHONE_FIELD_NAME.PHONE_NUMBER]: [required, phone],
  [SETTINGS_PHONE_FIELD_NAME.PASSWORD]: [required, password],
};

export const settingsFormChangePhoneValidation = (values) =>
  validate(values, config);
