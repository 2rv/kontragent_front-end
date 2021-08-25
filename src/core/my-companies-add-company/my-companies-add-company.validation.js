import { MY_COMPANIES_ADD_COMPANY_FIELD_NAME } from './my-companies-add-company.type';

import { validate } from '../../main/validate';

import { required } from '../../main/validate/validate.service';

const config = {
  //ADD COMPANY NAME VALIDATOR
  [MY_COMPANIES_ADD_COMPANY_FIELD_NAME.NAME]: [required],
  //ADD INN VALIDATOR
  [MY_COMPANIES_ADD_COMPANY_FIELD_NAME.INN]: [required],
};

export const addCompanyFormValidation = (values) => validate(values, config);
