import { validate } from '../../main/validate';
import {
  required,
  email,
  numberPositiveMin,
} from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_FIELD_NAME as FIELD_NAME } from './company-account-item-kontragent-item-update-data.constant';

const config = {
  [FIELD_NAME.EMAIL]: [required, email],
  [FIELD_NAME.COMMENT]: [required],
  [FIELD_NAME.RATING]: [required, numberPositiveMin(1)],
};

export const companyAccountItemKontragentItemUpdateDataValidation = (values) =>
  validate(values, config);
