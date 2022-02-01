import { validate } from '../../main/validate';
import {
  required,
  companyName,
  companyInn,
} from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME } from './company-account-item-kontragent-create.constant';

const config = {
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME]: [
    required,
    companyName,
  ],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN]: [
    required,
    companyInn,
  ],
};

export const companyAccountItemKontragentCreateFormValidation = (values) =>
  validate(values, config);
