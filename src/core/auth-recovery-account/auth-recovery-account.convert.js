import {
  AUTH_RECOVERY_ACCOUNT_DATA_NAME,
  AUTH_RECOVERY_ACCOUNT_FIELD_NAME,
} from './auth-recovery-account.type';

export const convertAuthFormRecoveryAccountData = (data) => ({
  [AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]:
    data[AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL],
});
