import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME } from './company-account-item-create-bill.constant';

import { numberPositive, required } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT]: [
    required,
    numberPositive,
  ],
};

export const companyAccountItemCreateBillFormValidation = (values) =>
  validate(values, config);
