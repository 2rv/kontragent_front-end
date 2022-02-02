export const COMPANY_ADMIN_UNREGISTERED_LIST_ROUTE_PATH = '/admin/company';

export const COMPANY_ADMIN_UNREGISTERED_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  VERIFICATE_PAYMENT: 'verificatePayment',
  VERIFICATE_INFO: 'verificateInfo',
  COMPANY_BALANCE: 'companyBalance',
  AMOUNT: 'amount',
};

export const COMPANY_ADMIN_UNREGISTERED_LIST_API = {
  GET_COMPANY_ADMIN_UNREGISTERED_LIST: {
    ENDPOINT: '/company/admin/get/unregistered',
    TYPE: 'GET',
  },
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
