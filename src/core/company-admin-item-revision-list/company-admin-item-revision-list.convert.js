import { COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME } from './company-admin-item-revision-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performCompanyAdminItemRevisionListData = (row) => {
  return row[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.LIST].map(
    (revision) => ({
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID],
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS],
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.CREATE_DATE]:
        convertFormatDate(
          revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.CREATE_DATE],
        ),
    }),
  );
};
