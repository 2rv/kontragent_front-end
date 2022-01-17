import { FEEDBACK_ADMIN_LIST_DATA_NAME } from './feedback-admin-list.constant';
import { convertForatDataNotTime } from '../../lib/common/convert/convert.core';

export const performFeedbackAdminListRowData = (row) => {
  return row[FEEDBACK_ADMIN_LIST_DATA_NAME.LIST].map((feedback) => ({
    [FEEDBACK_ADMIN_LIST_DATA_NAME.ID]:
      feedback[FEEDBACK_ADMIN_LIST_DATA_NAME.ID],
    [FEEDBACK_ADMIN_LIST_DATA_NAME.TITLE]:
      feedback[FEEDBACK_ADMIN_LIST_DATA_NAME.TITLE],
    [FEEDBACK_ADMIN_LIST_DATA_NAME.CREATE_DATE]: convertForatDataNotTime(
      feedback[FEEDBACK_ADMIN_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
