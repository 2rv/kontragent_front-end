import { validate } from '../../main/validate';
import { required } from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from './company-account-item-revision-self-create.constant';

const config = {
  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.DESCRIPTION]: [required],
};

export const companyAccountItemRevisionSelfCreateFormValidation = (values) =>
  validate(values, config);
