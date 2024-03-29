import { COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME } from './company-admin-item-info-list.constant';

export const performCompanyAdminItemInfoData = (row) => ({
  [COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.ID]:
    row[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.ID],
  [COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME]:
    row[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.NAME],
  [COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.INN]:
    row[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.INN],
  [COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO]:
    row[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_INFO],
  [COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT]:
    row[COMPANY_ADMIN_ITEM_INFO_LIST_DATA_NAME.VERIFICATE_PAYMENT],
});
