import { COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME } from './company-account-item-revision-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performCompanyAccountItemRevisionListData = (row) => {
  return row[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.LIST].map(
    (revision) => ({
      [COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.ID]:
        revision[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.ID],
      [COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.TITLE]:
        revision[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.TITLE],
      [COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.STATUS]:
        revision[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.STATUS],
      [COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.CREATE_DATE]:
        convertFormatDate(
          revision[COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME.CREATE_DATE],
        ),
    }),
  );
};
