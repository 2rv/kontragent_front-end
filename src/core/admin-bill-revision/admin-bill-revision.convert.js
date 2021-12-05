import { ADMIN_BILL_REVISION_DATA_NAME } from './admin-bill-revision.constant';

export const convertAdminBillRevisionSendData = (data, getFileList) => {
  const converted = {};
  if (data[ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION]) {
    converted[ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION] =
      data[ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION];
  }

  if (getFileList.length) {
    converted[ADMIN_BILL_REVISION_DATA_NAME.FILES] = getFileList;
  }

  return converted;
};
