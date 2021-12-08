import { validate } from '../../main/validate';

import { required, companyName, companyInn } from '../../main/validate/validate.service';
import { COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME } from './company-account-kontragents.constant';

const config = {
  [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME]: [required, companyName],
  [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN]: [required, companyInn],
};

export const companyAccountKontragentsFormValidation = (values) =>
  validate(values, config);
