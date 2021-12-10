import { COMPANY_ADMIN_BILL_LIST_DATA_NAME } from './company-admin-bill-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performComapnyAdminBillListRowData = (row) => {
  return row[COMPANY_ADMIN_BILL_LIST_DATA_NAME.LIST].map((bill) => ({
    [COMPANY_ADMIN_BILL_LIST_DATA_NAME.ID]:
      bill[COMPANY_ADMIN_BILL_LIST_DATA_NAME.ID],
    [COMPANY_ADMIN_BILL_LIST_DATA_NAME.AMOUNT]:
      bill[COMPANY_ADMIN_BILL_LIST_DATA_NAME.AMOUNT],
    [COMPANY_ADMIN_BILL_LIST_DATA_NAME.STATUS]:
      bill[COMPANY_ADMIN_BILL_LIST_DATA_NAME.STATUS],
    [COMPANY_ADMIN_BILL_LIST_DATA_NAME.NAME]:
      bill[COMPANY_ADMIN_BILL_LIST_DATA_NAME.COMPANY][
        COMPANY_ADMIN_BILL_LIST_DATA_NAME.NAME
      ],
    [COMPANY_ADMIN_BILL_LIST_DATA_NAME.CREATE_DATE]: convertFormatDate(
      bill[COMPANY_ADMIN_BILL_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
