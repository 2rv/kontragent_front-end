import { convertFormatDate } from '../../lib/common/convert/convert.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_LIST_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-list.constant';

export const performCompanyAccountItemRevisionKontragentListData = (row) => {
  return row[DATA_NAME.LIST].map((revision) => ({
    [DATA_NAME.ID]: revision[DATA_NAME.ID],
    [DATA_NAME.TITLE]: revision[DATA_NAME.TITLE],
    [DATA_NAME.STATUS]: revision[DATA_NAME.STATUS],
    [DATA_NAME.CREATE_DATE]: convertFormatDate(revision[DATA_NAME.CREATE_DATE]),
  }));
};
