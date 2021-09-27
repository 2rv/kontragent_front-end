import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_PAYMENT_DATA_NAME } from './company-account-item-payment-link.constant';

import { numberPositive, required } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_PAYMENT_DATA_NAME.AMOUNT]: [
    required,
    numberPositive,
  ],
};

export const companyAccountItemRevisionItemPaymentFormValidation = (values) =>
  validate(values, config);
