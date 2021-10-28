export const ACCOUNT_REFERAL_ROUTE_PATH = '/account/referal/[referalId]';
export const ACCOUNT_REFERAL_ROUTE_PATH_DYNAMIC = (
  { referalId } = {
    referalId: '[referalId]',
  },
) => `/account/referal/${referalId}`;

export const ACCOUNT_REFERAL_STORE_NAME = 'ACCOUNT_REFERAL';

export const ACCOUNT_REFERAL_API = {
  ACCOUNT_REFERAL: {
    ENDPOINT: (id) => `/referal-member/create/${id}`,
    TYPE: 'POST',
  },
};

export const ACCOUNT_REFERAL_ACTION_TYPE = {
  ACCOUNT_REFERAL_PENDING:
    'ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_PENDING',
  ACCOUNT_REFERAL_SUCCESS:
    'ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_SUCCESS',
  ACCOUNT_REFERAL_ERROR: 'ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_ERROR',
};

export const ACCOUNT_REFERAL_DATA_NAME = {
  REFERAL_ID: 'referalId',
};
