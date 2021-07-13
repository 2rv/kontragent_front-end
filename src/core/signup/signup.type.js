import { SIGNUP_FORM_FIELD_KEY } from '../signup/frame/signup-form';

export const SIGNUP_FIELD_NAME = {
  LOGIN: 'login',
  PASSWORD: 'password',
  EMAIL: 'email',
  PASSWORD_REPEAT: 'passwordrepeat',
  FULLNAME: 'fullname',
  CAPTCHA: 'captcha',
};

export const SIGNUP_FORM_FIELD_NAME = {
  [SIGNUP_FORM_FIELD_KEY.LOGIN]: SIGNUP_FIELD_NAME.LOGIN,
  [SIGNUP_FORM_FIELD_KEY.PASSWORD]: SIGNUP_FIELD_NAME.PASSWORD,
  [SIGNUP_FORM_FIELD_KEY.EMAIL]: SIGNUP_FIELD_NAME.EMAIL,
  [SIGNUP_FORM_FIELD_KEY.PASSWORD_REPEAT]: SIGNUP_FIELD_NAME.PASSWORD_REPEAT,
  [SIGNUP_FORM_FIELD_KEY.FULLNAME]: SIGNUP_FIELD_NAME.FULLNAME,
  [SIGNUP_FORM_FIELD_KEY.CAPTCHA]: SIGNUP_FIELD_NAME.CAPTCHA,
};

export const SIGNUP_ACTION_TYPE = {
  SIGNUP_FORM_UPLOAD_PENDING: 'SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING',
  SIGNUP_FORM_UPLOAD_SUCCESS: 'SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS',
  SIGNUP_FORM_UPLOAD_ERROR: 'SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR',
  SIGNUP_FORM_UPLOAD_RESET: 'SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_RESET',
};

export const SIGNUP_DATA_NAME = {
  LOGIN: 'login',
  PASSWORD: 'password',
  EMAIL: 'email',
  FULLNAME: 'fullname',
  CAPTCHA: 'captchaCode',
};
