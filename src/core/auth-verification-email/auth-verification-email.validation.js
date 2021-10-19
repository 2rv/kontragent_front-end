import { validate } from '../../main/validate';

import { AUTH_VERIFICATION_EMAIL_DATA_NAME } from './auth-verification-email.constant';

import { required } from '../../main/validate/validate.service';

const config = {
  [AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]: [required],
};

export const authVerificationEmailFormValidation = (values) =>
  validate(values, config);
