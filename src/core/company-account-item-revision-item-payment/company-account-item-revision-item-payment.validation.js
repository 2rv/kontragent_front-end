import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_ITEM_PAYMENT_LINK_DATA_NAME } from './company-account-item-revision-item-payment.constant';

import { numberPositive, required } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_ITEM_PAYMENT_LINK_DATA_NAME.AMOUNT]: [
    required,
    numberPositive,
  ],
};

export const companyAccountItemPaymentLinkFormValidation = (values) =>
  validate(values, config);
