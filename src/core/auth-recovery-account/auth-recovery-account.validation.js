import { AUTH_RECOVERY_ACCOUNT_FIELD_NAME } from './auth-recovery-account.type';

import { validate } from '../../main/validate';

import { required, email } from '../../main/validate/validate.service';

const config = {
  [AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL]: [required, email],
};

export const authFormRecoveryValidation = (values) => validate(values, config);
