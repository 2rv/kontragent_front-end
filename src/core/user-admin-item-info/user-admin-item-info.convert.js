import { USER_ADMIN_ITEM_INFO_DATA_NAME } from './user-admin-item-info.constant';

export const performUserAdminItemInfoData = (row) => ({
  [USER_ADMIN_ITEM_INFO_DATA_NAME.ID]: row[USER_ADMIN_ITEM_INFO_DATA_NAME.ID],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.LOGIN]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.LOGIN],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.FIRST_NAME]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.FIRST_NAME],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.LAST_NAME]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.LAST_NAME],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.EMAIL]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.EMAIL],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.PHONE]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.PHONE],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_EMAIL],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.CONFIRM_PHONE],
  [USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE]:
    row[USER_ADMIN_ITEM_INFO_DATA_NAME.ROLE],
});
