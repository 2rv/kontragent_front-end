import { text } from '../../lib/common/text';
import { SIGNUP_FIELD_NAME } from './signup.type';
import {
  login,
  password,
  passwordRepeat,
  email,
  required,
} from '../../main/validate/validate.service';

export function signupFormValidation(values) {
  const errors = {};

  errors[SIGNUP_FIELD_NAME.LOGIN] =
    required(values[SIGNUP_FIELD_NAME.LOGIN]) ||
    login(values[SIGNUP_FIELD_NAME.LOGIN]);

  errors[SIGNUP_FIELD_NAME.PASSWORD] =
    required(values[SIGNUP_FIELD_NAME.PASSWORD]) ||
    password(values[SIGNUP_FIELD_NAME.PASSWORD]);

  errors[SIGNUP_FIELD_NAME.PASSWORD_REPEAT] =
    required(values[SIGNUP_FIELD_NAME.PASSWORD_REPEAT]) ||
    passwordRepeat([SIGNUP_FIELD_NAME.PASSWORD])(
      values[SIGNUP_FIELD_NAME.PASSWORD_REPEAT],
      values,
    );

  errors[SIGNUP_FIELD_NAME.EMAIL] =
    required(values[SIGNUP_FIELD_NAME.EMAIL]) ||
    email(values[SIGNUP_FIELD_NAME.EMAIL]);

  if ( Object.values(errors).filter(error => error !== null).length ) return errors;
}
