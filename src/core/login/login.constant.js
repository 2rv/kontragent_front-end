export const LOGIN_ROUTE_PATH = '/login';

export const LOGIN_STORE_NAME = 'LOGIN';

export const LOGIN_API = {
  LOGIN_FORM_UPLOAD: {
    ENDPOINT: '/auth/login',
    TYPE: 'POST',
  },
};

export const LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH = '/home';

export const SIGNUP_REDIRECT_ON_LOGGED_PATH = '/logout';

export const LOGIN_REDIRECT = {
  RESTORE: {
    PATH: '/restore',
    CONFIG: { shallow: true },
  },
};
