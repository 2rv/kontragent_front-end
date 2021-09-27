import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_CREATE_DATA_NAME } from './company-account-create.constant';

import { required, companyName } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME]: [required, companyName],
  [COMPANY_ACCOUNT_CREATE_DATA_NAME.INN]: [required],
};

export const companyAccountCreateFormValidation = (values) =>
  validate(values, config);
