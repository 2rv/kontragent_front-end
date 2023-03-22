import { FEEDBACK_ADMIN_ITEM_DATA_NAME as DATA_NAME } from './feedback-admin-item.constant';

export const performFeedbackAdminItemData = (row) => ({
  [DATA_NAME.ID]: row[DATA_NAME.ID],
  [DATA_NAME.FILES]: row[DATA_NAME.FILES],
  [DATA_NAME.TITLE]: row[DATA_NAME.TITLE],
  [DATA_NAME.DESCRIPTION]: row[DATA_NAME.DESCRIPTION],
  [DATA_NAME.STATUS]: row[DATA_NAME.STATUS],
});
