import { USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME } from './user-admin-item-company-list.constant';

import { convertCompanyMemberRole } from '../../lib/common/convert';

export const performUserAdminItemCompanyListData = (row) => {
  return row[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.LIST].map((revision) => ({
    [USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ID]:
      revision[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ID],
    [USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.NAME]:
      revision[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.NAME],
    [USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.INN]:
      revision[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.INN],
    [USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ROLE]: convertCompanyMemberRole(
      revision[USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.COMPANY_MEMBER][0][
        USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME.ROLE
      ],
    ),
  }));
};
