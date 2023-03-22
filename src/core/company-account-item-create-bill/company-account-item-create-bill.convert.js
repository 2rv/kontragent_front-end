import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME } from './company-account-item-create-bill.constant';

export const convertCompanyAccountItemCreateBillSendData = (data) => {
  const converted = {};
  if (data[COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT]) {
    converted[COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT] =
      data[COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT];
  }

  return converted;
};
