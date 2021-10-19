import { AUTH_VERIFICATION_PHONE_DATA_NAME } from './auth-verification-phone.constant';

export const convertAuthVerificationPhoneFormData = (data) => ({
  [AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]: data[AUTH_VERIFICATION_PHONE_DATA_NAME.CODE],
});
