export const AUTH_VERIFICATION_PHONE_ROUTE_PATH = '/auth/verification/phone';

export const AUTH_VERIFICATION_PHONE_STORE_NAME = 'AUTH_VERIFICATION_PHONE';

export const AUTH_VERIFICATION_PHONE_API = {
  AUTH_VERIFICATION_PHONE: {
    ENDPOINT: (code) => `/user-verification/phone/${code}`,
    TYPE: 'POST',
  },
  AUTH_VERIFICATION_PHONE_REFERAL: {
    ENDPOINT: (code, referalId) =>
      `/user-verification/phone/${code}/referal/${referalId}`,
    TYPE: 'POST',
  },
  AUTH_VERIFICATION_PHONE_GET_CODE: {
    ENDPOINT: '/user-verification/phone',
    TYPE: 'GET',
  },
};

export const AUTH_VERIFICATION_PHONE_ACTION_TYPE = {
  FORM_PENDING: 'VERIFICATION_PHONE_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'VERIFICATION_PHONE_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'VERIFICATION_PHONE_ACTION_TYPE.FORM_ERROR',
};

export const AUTH_VERIFICATION_PHONE_DATA_NAME = {
  CODE: 'code',
};
