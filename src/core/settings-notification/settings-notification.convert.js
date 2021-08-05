import {
  SETTINGS_EMAIL_DATA_NAME,
  SETTINGS_EMAIL_DATA_KEY,
} from './settings-notification.type';

export const performSettingsNotification = (data) => ({
  [SETTINGS_EMAIL_DATA_NAME.EMAIL]: data[SETTINGS_EMAIL_DATA_KEY.EMAIL],
});
