import { validate } from '../../main/validate';

import { AUTH_RECOVERY_ACCOUNT_DATA_NAME } from './auth-recovery-account.constant';

import { required } from '../../main/validate/validate.service';

const config = {
  [AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]: [required],
};

export const authRecoveryAccountFormValidation = (values) =>
  validate(values, config);
