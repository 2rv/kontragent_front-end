export const AUTH_LOGIN_ROUTE_PATH = '/auth/login';

export const AUTH_LOGIN_STORE_NAME = 'AUTH_LOGIN';

export const AUTH_LOGIN_API = {
  AUTH_LOGIN: {
    ENDPOINT: '/auth/login',
    TYPE: 'POST',
  },
};

export const AUTH_LOGIN_ACTION_TYPE = {
  FORM_PENDING: 'LOGIN_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'LOGIN_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'LOGIN_ACTION_TYPE.FORM_ERROR',
};

export const AUTH_LOGIN_DATA_NAME = {
  LOGIN: 'login',
  PASSWORD: 'password',
};