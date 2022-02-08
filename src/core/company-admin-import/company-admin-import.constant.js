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

export const CONVERT_SCHEMA = {
  ИНН: {
    prop: COMPANY_ADMIN_DATA_NAME.INN,
    type: String,
    required: true,
  },
  Название: {
    prop: COMPANY_ADMIN_DATA_NAME.NAME,
    type: String,
    required: true,
  },
  Рецензия: {
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
