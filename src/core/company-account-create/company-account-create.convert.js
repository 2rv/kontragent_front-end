import { COMPANY_ACCOUNT_CREATE_DATA_NAME } from './company-account-create.constant';

export const convertCompanyAccountCreateFormData = (data) => ({
  [COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME]: data[COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME],
  [COMPANY_ACCOUNT_CREATE_DATA_NAME.INN]: data[COMPANY_ACCOUNT_CREATE_DATA_NAME.INN],
});
