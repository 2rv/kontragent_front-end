import { LOGIN_FIELD_NAME } from './login.type';
import {
  login,
  password,
  required,
} from '../../main/validate/validate.service';

export function loginFormValidation(values) {
  const errors = {};

  errors[LOGIN_FIELD_NAME.LOGIN] = required(values[LOGIN_FIELD_NAME.LOGIN]);
  // || login(values[LOGIN_FIELD_NAME.LOGIN]);

  errors[LOGIN_FIELD_NAME.PASSWORD] = required(
    values[LOGIN_FIELD_NAME.PASSWORD],
  );
  // || password(values[LOGIN_FIELD_NAME.PASSWORD]);

  if (Object.values(errors).filter((error) => error !== null).length)
    return errors;
}
