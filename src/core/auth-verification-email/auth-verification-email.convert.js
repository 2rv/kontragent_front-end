import { AUTH_VERIFICATION_EMAIL_DATA_NAME } from './auth-verification-email.constant';

export const convertAuthVerificationEmailFormData = (data) => ({
  [AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]: data[AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE],
});
