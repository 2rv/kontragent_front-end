import { COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME } from './company-account-item-payment-list.constant';
import {
  convertPaymentType,
  convertFormatDate,
} from '../../lib/common/convert';

export const performCompanyAccountItemPaymentListData = (row) => {
  return row[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.LIST].map(
    (payment) => ({
      [COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.AMOUNT]:
        payment[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.AMOUNT],
      [COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.CREATE_DATE]:
        convertFormatDate(
          payment[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.CREATE_DATE],
        ),
      [COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.TYPE]: convertPaymentType(
        payment[COMPANY_ACCOUNT_ITEM_PAYMENT_LIST_DATA_NAME.TYPE],
      ),
    }),
  );
};
