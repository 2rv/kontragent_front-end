import { NOTIFICATION_EMAIL_CREATE_DATA_NAME } from './notification-admin-email-create.constant';

export const convertNotificationAdminEmailCreateSendData = (
  data,
  getFileList,
) => {
  const converted = {};

  if (data[NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL]) {
    converted[NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL] =
      data[NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL];
  }

  if (data[NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE]) {
    converted[NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE] =
      data[NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE];
  }

  if (getFileList.length) {
    converted[NOTIFICATION_EMAIL_CREATE_DATA_NAME.FILE_LIST] = getFileList;
  }

  return converted;
};
