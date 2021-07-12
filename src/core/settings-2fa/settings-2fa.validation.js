import { validate } from '../../main/validate';
import { SETTINGS_2FA_FIELD_NAME } from './settings-2fa.type';
import { required } from '../../main/validate/validate.service';

const config = {
  [SETTINGS_2FA_FIELD_NAME.PHONE_NUMBER]: [required],
};

export const settings2FAFormValidation = (values) => validate(values, config);
