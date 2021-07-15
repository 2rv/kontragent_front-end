import { ADD_COMPANY_FORM_FIELD_KEY } from './frame/add-company-form';

export const MY_COMPANIES_ADD_COMPANY_FIELD_NAME = {
  NAME: 'name',
  INN: 'inn',
};

export const ADD_COMPANY_FORM_FIELD_NAME = {
  [ADD_COMPANY_FORM_FIELD_KEY.NAME]: MY_COMPANIES_ADD_COMPANY_FIELD_NAME.NAME,
  [ADD_COMPANY_FORM_FIELD_KEY.INN]: MY_COMPANIES_ADD_COMPANY_FIELD_NAME.INN,
};

export const MY_COMPANIES_ADD_COMPANY_ACTION_TYPE = {
  ADD_COMPANY_FORM_UPLOAD_PENDING:
    'MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_PENDING',
  ADD_COMPANY_FORM_UPLOAD_SUCCESS:
    'MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_SUCCESS',
  ADD_COMPANY_FORM_UPLOAD_ERROR:
    'MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_ERROR',
  ADD_COMPANY_FORM_UPLOAD_RESET:
    'MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_RESET',
};

export const MY_COMPANIES_ADD_COMPANY_DATA_NAME = {
  NAME: 'name',
  INN: 'inn',
};