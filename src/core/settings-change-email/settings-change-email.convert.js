import { SETTINGS_CHANGE_EMAIL_DATA_NAME } from './settings-change-email.constant';

export const convertSettingsChangeEmailFormData = (data) => ({
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL]:
    data[SETTINGS_CHANGE_EMAIL_DATA_NAME.NEW_EMAIL].trim(),
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD]:
    data[SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD].trim(),
});
