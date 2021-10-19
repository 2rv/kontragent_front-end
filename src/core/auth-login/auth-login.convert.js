import { AUTH_LOGIN_DATA_NAME } from './auth-login.constant';

export const convertAuthLoginFormData = (data) => ({
  [AUTH_LOGIN_DATA_NAME.LOGIN]: data[AUTH_LOGIN_DATA_NAME.LOGIN],
  [AUTH_LOGIN_DATA_NAME.PASSWORD]: data[AUTH_LOGIN_DATA_NAME.PASSWORD],
});
