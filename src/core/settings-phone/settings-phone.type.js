import { SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY } from './frame/settings-form-change-phone';

export const SETTINGS_PHONE_FIELD_NAME = {
  PHONE_NUMBER: 'phone',
  PASSWORD: 'password',
};

export const SETTINGS_FORM_CHANGE_PHONE_FIELD_NAME = {
  [SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.PHONE_NUMBER]:
    SETTINGS_PHONE_FIELD_NAME.PHONE_NUMBER,
  [SETTINGS_FORM_CHANGE_PHONE_FIELD_KEY.PASSWORD]:
    SETTINGS_PHONE_FIELD_NAME.PASSWORD,
};

export const SETTINGS_PHONE_ACTION_TYPE = {
  SETTINGS_FORM_CHANGE_PHONE_UPLOAD_SUCCESS:
    'SETTINGS_FORM_CHANGE_PHONE_UPLOAD_SUCCESS',
  SETTINGS_FORM_CHANGE_PHONE_UPLOAD_PENDING:
    'SETTINGS_FORM_CHANGE_PHONE_UPLOAD_PENDING',
  SETTINGS_FORM_CHANGE_PHONE_UPLOAD_ERROR:
    'SETTINGS_FORM_CHANGE_PHONE_UPLOAD_ERROR',
  SETTINGS_FORM_CHANGE_PHONE_UPLOAD_RESET:
    'SETTINGS_FORM_CHANGE_PHONE_UPLOAD_RESET',
  SETTINGS_PHONE_GET_PHONE_SUCCESS: 'SETTINGS_PHONE_GET_PHONE_SUCCESS',
  SETTINGS_PHONE_GET_PHONE_PENDING: 'SETTINGS_PHONE_GET_PHONE_PENDING',
  SETTINGS_PHONE_GET_PHONE_ERROR: 'SETTINGS_PHONE_GET_PHONE_ERROR',
  SETTINGS_PHONE_GET_PHONE_RESET: 'SETTINGS_PHONE_GET_PHONE_RESET',
};

export const SETTINGS_PHONE_DATA_NAME = {
  PHONE: 'phone',
  PASSWORD: 'password',
};
