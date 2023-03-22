import { AUTH_RECOVERY_ACCOUNT_DATA_NAME } from './auth-recovery-account.constant';

export const convertAuthRecoveryAccountFormData = (data) => ({
  [AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]: data[AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL],
  [AUTH_RECOVERY_ACCOUNT_DATA_NAME.PASSWORD]: data[AUTH_RECOVERY_ACCOUNT_DATA_NAME.PASSWORD],
});
