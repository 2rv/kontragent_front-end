import { validate } from '../../main/validate';

import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_DATA_NAME } from './company-account-item-self-revision-create.constant';

import { required } from '../../main/validate/validate.service';

const config = {
  [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_DATA_NAME.TITLE]: [required],
  [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_DATA_NAME.DESCRIPTION]: [required],
};

export const companyAccountItemSelfRevisionCreateFormValidation = (values) =>
  validate(values, config);
