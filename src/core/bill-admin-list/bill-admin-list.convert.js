import { BILL_ADMIN_LIST_DATA_NAME } from './bill-admin-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performBillAdminListRowData = (row) => {
  return row[BILL_ADMIN_LIST_DATA_NAME.LIST].map((bill) => ({
    [BILL_ADMIN_LIST_DATA_NAME.ID]: bill[BILL_ADMIN_LIST_DATA_NAME.ID],
    [BILL_ADMIN_LIST_DATA_NAME.STATUS]: bill[BILL_ADMIN_LIST_DATA_NAME.STATUS],
    [BILL_ADMIN_LIST_DATA_NAME.AMOUNT]: bill[BILL_ADMIN_LIST_DATA_NAME.AMOUNT],
    [BILL_ADMIN_LIST_DATA_NAME.INN]:
      bill[BILL_ADMIN_LIST_DATA_NAME.COMPANY][BILL_ADMIN_LIST_DATA_NAME.INN],
    [BILL_ADMIN_LIST_DATA_NAME.NAME]:
      bill[BILL_ADMIN_LIST_DATA_NAME.COMPANY][BILL_ADMIN_LIST_DATA_NAME.NAME],
    [BILL_ADMIN_LIST_DATA_NAME.CREATE_DATE]: convertFormatDate(
      bill[BILL_ADMIN_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
