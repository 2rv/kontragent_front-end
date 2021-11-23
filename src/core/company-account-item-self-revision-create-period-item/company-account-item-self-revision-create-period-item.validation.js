import { validate } from '../../main/validate';

import { required } from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME } from './company-account-item-self-revision-create-period-item.constant';

const config = {
  [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR]: [
    required,
  ],
};

export const CompanyAccountItemSelfRevisionCreatePeriodItemFormValidation = (
  values,
) => validate(values, config);
