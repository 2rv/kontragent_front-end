import { convertFormatDate } from '../../lib/common/convert/convert.core';
import { FEEDBACK_ADMIN_ITEM_DATA_NAME } from './feedback-admin-item.constant';

export const performFeedbackAdminItemData = (row) => ({
  [FEEDBACK_ADMIN_ITEM_DATA_NAME.ID]: row[FEEDBACK_ADMIN_ITEM_DATA_NAME.ID],

  [FEEDBACK_ADMIN_ITEM_DATA_NAME.FILES]:
    row[FEEDBACK_ADMIN_ITEM_DATA_NAME.FILES],

  [FEEDBACK_ADMIN_ITEM_DATA_NAME.TITLE]:
    row[FEEDBACK_ADMIN_ITEM_DATA_NAME.TITLE],
  [FEEDBACK_ADMIN_ITEM_DATA_NAME.DESCRIPTION]:
    row[FEEDBACK_ADMIN_ITEM_DATA_NAME.DESCRIPTION],
});
