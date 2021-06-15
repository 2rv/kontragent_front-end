import { AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY } from './frame/auth-form-recovery-account';

export const AUTH_RECOVERY_ACCOUNT_FIELD_NAME = {
  EMAIL: 'email',
};

export const AUTH_FORM_RECOVERY_ACCOUNT_FIELD_NAME = {
  [AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY.EMAIL]:
    AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL,
};

export const AUTH_RECOVERY_ACCOUNT_ACTION_TYPE = {
  AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_PENDING:
    'AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_PENDING',
  AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_SUCCESS:
    'AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_SUCCESS',
  AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_ERROR:
    'AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_ERROR',
  AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_RESET:
    'AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_RESET',
};

export const AUTH_RECOVERY_ACCOUNT_DATA_NAME = {
  EMAIL: 'email',
};