import { validate } from '../../main/validate';

import { AUTH_VERIFICATION_PHONE_DATA_NAME } from './auth-verification-phone.constant';

import { required } from '../../main/validate/validate.service';

const config = {
  [AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]: [required],
};

export const authVerificationPhoneFormValidation = (values) =>
  validate(values, config);
