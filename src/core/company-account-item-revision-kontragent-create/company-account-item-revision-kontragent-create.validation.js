import { validate } from '../../main/validate';
import {
  required,
  year,
  companyInn,
} from '../../main/validate/validate.service';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME } from './company-account-item-revision-kontragent-create.constant';

const config = {
  // [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.TITLE]: [required],
  // [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.INN]: [
  //   required,
  //   companyInn,
  // ],
  // [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.DESCRIPTION]: [
  //   required,
  // ],
  // [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEAR]: [
  //   required,
  //   year,
  // ],
};

export const CompanyAccountItemRevisionKontragentCreateFormValidation = (
  values,
) => validate(values, config);
