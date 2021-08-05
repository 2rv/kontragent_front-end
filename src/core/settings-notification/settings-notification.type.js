import { SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY } from './frame/settings-form-change-email-notification';

export const SETTINGS_EMAIL_FIELD_NAME = {
  EMAIL: 'email',
};

export const SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_NAME = {
  [SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_FIELD_KEY.EMAIL]:
    SETTINGS_EMAIL_FIELD_NAME.EMAIL,
};

export const SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE = {
  SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_PENDING:
    'SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_PENDING',
  SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_SUCCESS:
    'SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_SUCCESS',
  SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_ERROR:
    'SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_ERROR',

  SETTINGS_EMAIL_GET_EMAIL_PENDING: 'SETTINGS_EMAIL_GET_EMAIL_PENDING',
  SETTINGS_EMAIL_GET_EMAIL_SUCCESS: 'SETTINGS_EMAIL_GET_EMAIL_SUCCESS',
  SETTINGS_EMAIL_GET_EMAIL_ERROR: 'SETTINGS_EMAIL_GET_EMAIL_ERROR',
};

export const SETTINGS_EMAIL_DATA_KEY = {
  EMAIL: 'email',
};

export const SETTINGS_EMAIL_DATA_NAME = {
  EMAIL: 'email',
};
