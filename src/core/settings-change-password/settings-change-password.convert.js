import { SETTINGS_CHANGE_PASSWORD_DATA_NAME } from './settings-change-password.constant';

export const convertSettingsChangePasswordFormData = (data) => ({
  [SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD]:
    data[SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD].trim(),
  [SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD]:
    data[SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD].trim(),
});
