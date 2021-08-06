export const AUTH_RECOVERY_ACCOUNT_ROUTE_PATH = '/auth-recovery-account';

export const AUTH_RECOVERY_ACCOUNT_STORE_NAME = 'AUTH_RECOVERY_ACCOUNT';

export const AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_LOGGED_PATH = '/';

export const AUTH_RECOVERY_ACCOUNT_API = {
  AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD: {
    ENDPOINT: `user/recovery/email`,
    TYPE: 'POST',
  },
};

export const AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_NEXT_STEP =
  '/auth/email-verification';
