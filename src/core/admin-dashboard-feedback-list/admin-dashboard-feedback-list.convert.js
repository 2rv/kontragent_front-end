import { FEEDBACK_ADMIN_LIST_DATA_NAME as DATA_NAME } from './admin-dashboard-feedback-list.constant';
import { convertForatDataNotTime } from '../../lib/common/convert/convert.core';

export const performFeedbackAdminListRowData = (row) => {
  return row[DATA_NAME.LIST].map((feedback) => ({
    [DATA_NAME.ID]: feedback[DATA_NAME.ID],
    [DATA_NAME.TITLE]: feedback[DATA_NAME.TITLE],
    [DATA_NAME.CREATE_DATE]: convertForatDataNotTime(
      feedback[DATA_NAME.CREATE_DATE],
    ),
    [DATA_NAME.STATUS]: feedback[DATA_NAME.STATUS],
  }));
};
