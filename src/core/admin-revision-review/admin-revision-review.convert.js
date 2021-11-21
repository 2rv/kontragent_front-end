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
  if (data[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE] !== 0) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE] = Number(
      data[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE],
    );
  }
  if (getFileList.length) {
    converted[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST] = getFileList;
  }

  return converted;
};

export const performAdminRevisionReviewGetData = (row) => {
  const performed = {};
  if (row[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]) {
    performed[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW] =
      row[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW];
  }
  performed[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS] =
    row[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS];

  if (row[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE] !== 0) {
    performed[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE] = Number(
      row[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE],
    );
  }
  if (row[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_LIST].length) {
    performed[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_LIST] =
      row[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_LIST];
  }

  return performed;
};
