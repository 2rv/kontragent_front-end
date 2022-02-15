export const COMPANY_ADMIN_LIST_ROUTE_PATH = '/admin/company';
export const COMPANY_ADMIN_LIST_ACTION_TYPE = {
  REQUEST_PENDING: 'COMPANY_ADMIN_LIST_ACTION_TYPE.REQUEST_PENDING',
  REQUEST_SUCCESS: 'COMPANY_ADMIN_LIST_ACTION_TYPE.REQUEST_SUCCESS',
  REQUEST_ERROR: 'COMPANY_ADMIN_LIST_ACTION_TYPE.REQUEST_ERROR',
};
export const COMPANY_ADMIN_LIST_API = {
  GET_LIST: {
    ENDPOINT: '/company/admin',
    TYPE: 'GET',
  },
};
export const COMPANY_ADMIN_LIST_DATA_NAME = {
  LIST: 'list',
  SKIP: 'skip',
  TAKE: 'take',
  COUNT: 'count',
  TYPE: 'type',

  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  VERIFICATE_PAYMENT: 'verificatePayment',
  VERIFICATE_INFO: 'verificateInfo',
  COMPANY_BALANCE: 'companyBalance',
  AMOUNT: 'amount',
};
