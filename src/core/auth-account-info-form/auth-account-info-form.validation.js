import { AUTH_ACCOUNT_INFO_FORM_FIELD_NAME } from './auth-account-info-form.type';

import { validate } from '../../main/validate';
import { required, fullname } from '../../main/validate/validate.service';

const config = {
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.FULLNAME_NAME]: [required, fullname],
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_INFO_FORM_FIELDS]: [required],
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_NAME]: [required],
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_INN]: [required],
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.POSITION_IN_COMPANY]: [required],
};

export const authAccountInfoFormValidation = (values) =>
  validate(values, config);
