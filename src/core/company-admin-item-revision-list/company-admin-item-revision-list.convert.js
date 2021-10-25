import { COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME } from './company-admin-item-revision-list.constant';

export const performCompanyAdminItemRevisionListData = (row) => {
  return row[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.LIST].map(
    (revision) => ({
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.ID],
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.TITLE]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.TITLE],
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.STATUS],
      [COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.PRICE]:
        revision[COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME.PRICE],
    }),
  );
};