import {
  AUTH_CHANGE_PASSWORD_DATA_NAME,
  AUTH_CHANGE_PASSWORD_FIELD_NAME,
} from './auth-change-password.type';

export const convertAuthChangePasswordFormData = (data, code) => ({
  [AUTH_CHANGE_PASSWORD_DATA_NAME.PASSWORD]:
    data[AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD],
  [AUTH_CHANGE_PASSWORD_DATA_NAME.CODE]: code,
});
