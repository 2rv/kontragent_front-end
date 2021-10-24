export const ACCOUNT_ADD_TO_REFERAL_ROUTE_PATH =
  '/account/add-to-referal/[referalId]';
export const ACCOUNT_ADD_TO_REFERAL_ROUTE_PATH_DYNAMIC = (
  { referalId } = {
    referalId: '[referalId]',
  },
) => `/account/add-to-referal/${referalId}`;

export const ACCOUNT_ADD_TO_REFERAL_STORE_NAME = 'ACCOUNT_ADD_TO_REFERAL';

export const ACCOUNT_ADD_TO_REFERAL_API = {
  ACCOUNT_ADD_TO_REFERAL: {
    ENDPOINT: (id) => `/referal/create/${id}`,
    TYPE: 'POST',
  },
};

export const ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE = {
  ADD_TO_REFERAL_PENDING:
    'ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_PENDING',
  ADD_TO_REFERAL_SUCCESS:
    'ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_SUCCESS',
  ADD_TO_REFERAL_ERROR:
    'ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_ERROR',
};

export const ACCOUNT_ADD_TO_REFERAL_DATA_NAME = {
  REFERAL_ID: 'referalId',
};
