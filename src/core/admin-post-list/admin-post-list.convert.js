import { ADMIN_POST_LIST_DATA_NAME } from './admin-post-list.constant';
import { convertForatDataNotTime } from '../../lib/common/convert/convert.core';

export const performAdminPostListRowData = (row) => {
  return row.map((post) => ({
    [ADMIN_POST_LIST_DATA_NAME.ID]: post[ADMIN_POST_LIST_DATA_NAME.ID],
    [ADMIN_POST_LIST_DATA_NAME.TITLE]: post[ADMIN_POST_LIST_DATA_NAME.TITLE],
    [ADMIN_POST_LIST_DATA_NAME.CREATE_DATE]: convertForatDataNotTime(
      post[ADMIN_POST_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
