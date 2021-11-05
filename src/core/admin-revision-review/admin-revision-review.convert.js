import { ADMIN_REVISION_REVIEW_DATA_NAME } from './admin-revision-review.constant';

export const convertAdminRevisionReviewSendData = (data, getFileList) => {
  const converted = {};
  if (data[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW] =
      data[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW];
  }

  if (data[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS] =
      data[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS];
  }

  if (data[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE] = Number(
      data[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE],
    );
  }

  if (data[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST].length) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST] = getFileList;
  }

  return converted;
};
