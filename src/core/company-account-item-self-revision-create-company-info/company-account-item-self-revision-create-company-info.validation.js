import { validate } from '../../main/validate';

import { required } from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME } from './company-account-item-self-revision-create-company-info.constant';

const config = {
  [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION]:
    [required],
};

export const CompanyAccountItemSelfRevisionCreateCompanyInfoFormValidation = (
  values,
) => validate(values, config);
