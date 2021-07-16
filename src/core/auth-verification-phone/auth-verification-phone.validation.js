import { validate } from '../../main/validate';

import { AUTH_VERIFICATION_PHONE_FIELD_NAME } from './auth-verification-phone.type';

import { required } from '../../main/validate/validate.service';

const config = {
  [AUTH_VERIFICATION_PHONE_FIELD_NAME.CODE]: [required],
};

export const authFormVerificationPhoneValidation = (values) =>
  validate(values, config);
