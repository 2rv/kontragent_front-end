export const COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE = {
  REQUEST_PENDING:
    'COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE.REQUEST_PENDING',
  REQUEST_SUCCESS:
    'COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE.REQUEST_SUCCESS',
  REQUEST_ERROR: 'COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE.REQUEST_ERROR',
  REQUEST_UPDATE_SUCCESS:
    'COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE.REQUEST_UPDATE_SUCCESS',
  REQUEST_UPDATE_PENDING:
    'COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE.REQUEST_UPDATE_PENDING',
};
export const COMPANY_ADMIN_UNREGISTERED_LIST_API = {
  GET_LIST: {
    ENDPOINT: '/company/admin',
    TYPE: 'GET',
  },
};
export const COMPANY_ADMIN_UNREGISTERED_LIST_DATA_NAME = {
  LIST: 'list',
  SKIP: 'skip',
  TAKE: 'take',
  COUNT: 'count',

  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  VERIFICATE_PAYMENT: 'verificatePayment',
  VERIFICATE_INFO: 'verificateInfo',
  COMPANY_BALANCE: 'companyBalance',
  AMOUNT: 'amount',
};
export const COMPANY_TYPE = {
  'Все компании': 0,
  'Список 115-ФЗ': 1,
  'Список ПОС': 2,
  'Список ЦБ светофор': 3,
  'Список отказных материалов': 4,
  'Компании однодневки': 5,
  'Компании статус Т': 6,
  Выгодоприобретатели: 7,
};
