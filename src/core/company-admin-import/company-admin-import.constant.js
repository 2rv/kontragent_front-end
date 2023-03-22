import { COMPANY_ADMIN_IMPORT_FORM_ROUTE_PATH } from '../company-admin-import-form/company-admin-import-form.constant';

export const COMPANY_ADMIN_IMPORT_ROUTE_PATH = '/admin/company/import';

export const COMPANY_ADMIN_DATA_NAME = {
  INN: 'inn',
  NAME: 'name',
  REVIEW: 'review',
  CREATE_DATE: 'createDate',
};

export const COMPANY_TYPE = {
  'Список 115-ФЗ': 1,
  'Список ПОС': 2,
  'Список ЦБ светофор': 3,
  'Список отказных материалов': 4,
  'Компании однодневки': 5,
  'Компании статус Т': 6,
  Выгодоприобретатели: 7,
};

export const COMPANY_TYPE_OPTIONS = [
  {
    key: 0,
    value: 0,
    text: 'Отсутствует',
  },
  {
    key: 1,
    value: 1,
    text: 'Список 115-ФЗ',
  },
  {
    key: 2,
    value: 2,
    text: 'Список ПОС',
  },
  {
    key: 3,
    value: 3,
    text: 'Список ЦБ светофор',
  },
  {
    key: 4,
    value: 4,
    text: 'Список отказных материалов',
  },
  {
    key: 5,
    value: 5,
    text: 'Компании однодневки',
  },
  {
    key: 6,
    value: 6,
    text: 'Компании статус Т',
  },
  {
    key: 7,
    value: 7,
    text: 'Выгодоприобретатели',
  },
];

export const CONVERT_SCHEMA = {
  ИНН: {
    prop: COMPANY_ADMIN_DATA_NAME.INN,
    type: String,
    required: true,
  },
  'Название компании': {
    prop: COMPANY_ADMIN_DATA_NAME.NAME,
    type: String,
    required: true,
  },
  Review: {
    prop: COMPANY_ADMIN_DATA_NAME.REVIEW,
    type: String,
  },
  Дата: {
    prop: COMPANY_ADMIN_DATA_NAME.CREATE_DATE,
    type: (data) => new Date(data),
  },
};

export const COMPANY_ADMIN_IMPORT_ACTION_TYPE = {
  FORM_PENDING: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.FORM_ERROR',
  FORM_PROGRESS: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.FORM_PROGRESS',
  RESET_CHUNK: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.RESET_CHUNK',

  XSLX_PENDING: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.XSLX_PENDING',
  XSLX_SUCCESS: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.XSLX_SUCCESS',
  XSLX_ERROR: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.XSLX_ERROR',
  XSLX_UPDATE: 'COMPANY_ADMIN_IMPORT_ACTION_TYPE.XSLX_UPDATE',
};

export const COMPANY_ADMIN_IMPORT_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_IMPORT.IMPORT_XLSX',
    path: () => COMPANY_ADMIN_IMPORT_ROUTE_PATH,
    pathname: COMPANY_ADMIN_IMPORT_ROUTE_PATH,
  },
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_IMPORT.IMPORT_FORM',
    path: () => COMPANY_ADMIN_IMPORT_FORM_ROUTE_PATH,
    pathname: COMPANY_ADMIN_IMPORT_FORM_ROUTE_PATH,
  },
];
