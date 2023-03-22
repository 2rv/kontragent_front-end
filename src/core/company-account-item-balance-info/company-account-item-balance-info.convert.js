import { COMPANY_ACCOUNT_ITEM_BALANCE_INFO_DATA_NAME } from './company-account-item-balance-info.constant';

export const performCompanyAccountItemBalanceInfoData = (row) => ({
  [COMPANY_ACCOUNT_ITEM_BALANCE_INFO_DATA_NAME.AMOUNT]:
    row[COMPANY_ACCOUNT_ITEM_BALANCE_INFO_DATA_NAME.AMOUNT],
});
