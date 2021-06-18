import { AUTH_ACCOUNT_INFO_FORM_ROUTE_PATH } from '../auth-account-info-form';

export const AUTH_VERIFICATION_PHONE_ROUTE_PATH = '/auth/verification-phone';

export const AUTH_VERIFICATION_PHONE_STORE_NAME = 'AUTH_VERIFICATION_PHONE';

export const AUTH_VERIFICATION_PHONE_REDIRECT_UNAUTHORIZED_PATH = '/';

export const AUTH_VERIFICATION_PHONE_REDIRECT_ON_UPLOAD_PATH =
  AUTH_ACCOUNT_INFO_FORM_ROUTE_PATH;

export const AUTH_VERIFICATION_PHONE_API = {
  ENDPOINT: `user/verification/phone`,
  TYPE: 'GET',
};

export const AUTH_VERIFICATION_PHONE_CONFIRM_API = {
  ENDPOINT: `user/verification/phoneCode`,
  TYPE: 'POST',
};
