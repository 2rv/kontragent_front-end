import { validate } from '../../main/validate';

import { companyInn, required } from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME } from './company-account-item-revision-create-company-info.constant';

const config = {
  [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.TITLE]: [
    required,
  ],
  [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION]: [
    required,
  ],
  [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.INN]: [
    required,
    companyInn,
  ],
};

export const CompanyAccountItemRevisionCreateCompanyInfoFormValidation = (
  values,
) => validate(values, config);
