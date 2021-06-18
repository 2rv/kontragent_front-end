import {
  AUTH_VERIFICATION_PHONE_DATA_NAME,
  AUTH_VERIFICATION_PHONE_FIELD_NAME,
} from './auth-verification-phone.type';

export const convertAuthFormVerificationPhoneData = (values) => ({
  [AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]:
    values[AUTH_VERIFICATION_PHONE_FIELD_NAME.CODE],
});
