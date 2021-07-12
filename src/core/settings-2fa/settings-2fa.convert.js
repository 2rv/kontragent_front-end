import {
  SETTINGS_2FA_DATA_NAME,
  SETTINGS_2FA_FIELD_NAME,
} from './settings-2fa.type';

export const convertSettings2FAFormData = (data) => ({
  [SETTINGS_2FA_DATA_NAME.PHONE_NUMBER]:
    data[SETTINGS_2FA_FIELD_NAME.PHONE_NUMBER],
});
