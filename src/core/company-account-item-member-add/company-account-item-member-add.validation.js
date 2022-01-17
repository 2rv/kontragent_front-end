import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME } from './company-account-item-member-add.constant';

import { numberPositive, required } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID]: [required],
};

export const companyAccountItemMemberAddFormValidation = (values) =>
  validate(values, config);
