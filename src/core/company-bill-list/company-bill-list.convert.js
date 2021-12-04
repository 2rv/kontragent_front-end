import { COMPANY_BILL_LIST_DATA_NAME } from './company-bill-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performComapnyBillListRowData = (row) => {
  return row[COMPANY_BILL_LIST_DATA_NAME.LIST].map((bill) => ({
    [COMPANY_BILL_LIST_DATA_NAME.ID]: bill[COMPANY_BILL_LIST_DATA_NAME.ID],
    [COMPANY_BILL_LIST_DATA_NAME.AMOUNT]:
      bill[COMPANY_BILL_LIST_DATA_NAME.AMOUNT],
    [COMPANY_BILL_LIST_DATA_NAME.STATUS]:
      bill[COMPANY_BILL_LIST_DATA_NAME.STATUS],
    [COMPANY_BILL_LIST_DATA_NAME.NAME]:
      bill[COMPANY_BILL_LIST_DATA_NAME.COMPANY][
        COMPANY_BILL_LIST_DATA_NAME.NAME
      ],
    [COMPANY_BILL_LIST_DATA_NAME.CREATE_DATE]: convertFormatDate(
      bill[COMPANY_BILL_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
