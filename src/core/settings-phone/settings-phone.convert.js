import {
  SETTINGS_PHONE_DATA_NAME,
  SETTINGS_PHONE_FIELD_NAME,
} from './settings-phone.type';

import { SETTINGS_PHONE_DATA_KEY } from './settings-phone.constant';

export const convertSettingsFormChangePhoneData = (values) => ({
  [SETTINGS_PHONE_DATA_NAME.PHONE]:
    values[SETTINGS_PHONE_FIELD_NAME.PHONE_NUMBER],
  [SETTINGS_PHONE_DATA_NAME.PASSWORD]:
    values[SETTINGS_PHONE_FIELD_NAME.PASSWORD],
});

export const performSettingsPhone = (rawdata) => ({
  [SETTINGS_PHONE_DATA_NAME.PHONE]: rawdata[SETTINGS_PHONE_DATA_KEY.PHONE],
});
