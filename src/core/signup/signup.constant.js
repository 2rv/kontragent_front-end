export const SIGNUP_ROUTE_PATH = '/signup';

export const SIGNUP_STORE_NAME = 'SIGNUP';

export const SIGNUP_API = {
  SIGNUP_FORM_UPLOAD: {
    ENDPOINT: '/auth/signup',
    TYPE: 'POST',
  },
};

export const SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH = '/home';

export const SIGNUP_REDIRECT_ON_LOGGED_PATH = '/logout';

import { LOGIN_ROUTE_PATH } from '../login/login.constant';
export const SIGNUP_PAGE_LOGIN_PATH = LOGIN_ROUTE_PATH;
