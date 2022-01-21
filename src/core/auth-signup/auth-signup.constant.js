export const AUTH_SIGNUP_ROUTE_PATH = '/auth/signup';

export const AUTH_SIGNUP_STORE_NAME = 'AUTH_SIGNUP';

export const AUTH_SIGNUP_API = {
  AUTH_SIGNUP: {
    ENDPOINT: '/auth/signup',
    TYPE: 'POST',
  },
};

export const AUTH_SIGNUP_ACTION_TYPE = {
  FORM_PENDING: 'SIGNUP_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'SIGNUP_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'SIGNUP_ACTION_TYPE.FORM_ERROR',
  FORM_CLEANUP: 'SIGNUP_ACTION_TYPE.FORM_CLEANUP',
};

export const AUTH_SIGNUP_DATA_NAME = {
  LOGIN: 'login',
  PASSWORD: 'password',
  PASSWORD_REPEAT: 'passwordRepeat',
  EMAIL: 'email',
  PHONE: 'phone',
  FIRST_NAME: 'firstname',
  LAST_NAME: 'lastname',
  LAST_NAME: 'lastname',
  PRIVACY_POLICY: 'privacyPolicy',
  TERMS_OF_USE: 'termsOfUse',
};
