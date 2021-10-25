import { REVISION_ADMIN_LIST_DATA_NAME } from './revision-admin-list.constant';
import { convertRevisionStatus } from '../../lib/common/convert/convert.core';

export const performRevisionAdminListRowData = (row) => {
  return row[REVISION_ADMIN_LIST_DATA_NAME.LIST].map((revision) => ({
    [REVISION_ADMIN_LIST_DATA_NAME.ID]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.ID],
    [REVISION_ADMIN_LIST_DATA_NAME.TITLE]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.TITLE],
    [REVISION_ADMIN_LIST_DATA_NAME.STATUS]: convertRevisionStatus(
      revision[REVISION_ADMIN_LIST_DATA_NAME.STATUS],
    ).text,
    [REVISION_ADMIN_LIST_DATA_NAME.PRICE]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.PRICE],
  }));
};
