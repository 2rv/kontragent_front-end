import { REVISION_ADMIN_LIST_DATA_NAME } from './revision-admin-list.constant';

export const performRevisionAdminListRowData = (row) => {
  return row[REVISION_ADMIN_LIST_DATA_NAME.LIST].map((revision) => ({
    [REVISION_ADMIN_LIST_DATA_NAME.ID]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.ID],
    [REVISION_ADMIN_LIST_DATA_NAME.TITLE]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.TITLE],
    [REVISION_ADMIN_LIST_DATA_NAME.STATUS]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.STATUS],
    [REVISION_ADMIN_LIST_DATA_NAME.PRICE]:
      revision[REVISION_ADMIN_LIST_DATA_NAME.PRICE],
  }));
};
