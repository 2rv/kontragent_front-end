import {
  SETTINGS_EMAIL_DATA_NAME,
  SETTINGS_EMAIL_FIELD_NAME,
} from './settings-email.type';

import { SETTINGS_EMAIL_DATA_KEY } from './settings-email.constant';

export const convertSettingsFormChangeEmailData = (values) => ({
  [SETTINGS_EMAIL_DATA_NAME.EMAIL]: values[SETTINGS_EMAIL_FIELD_NAME.EMAIL],
  [SETTINGS_EMAIL_DATA_NAME.PASSWORD]:
    values[SETTINGS_EMAIL_FIELD_NAME.PASSWORD],
});

export const performSettingsEmail = (rawdata) => ({
  [SETTINGS_EMAIL_DATA_NAME.EMAIL]: rawdata[SETTINGS_EMAIL_DATA_KEY.EMAIL],
});
