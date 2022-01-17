import { FEEDBACK_ACCOUNT_CREATE_DATA_NAME } from './feedback-account-create.constant';

export const convertFeedbackAccountCreateSendData = (data, getFileList) => {
  const converted = {};

  if (data[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE]) {
    converted[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE] =
      data[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE];
  }

  if (data[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION]) {
    converted[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION] =
      data[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION];
  }

  if (getFileList.length) {
    converted[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.FILES] = getFileList;
  }

  return converted;
};
