export const ADMIN_REVISION_REVIEW_ROUTE_PATH =
  '/admin/revision/[revisionId]/review';
export const ADMIN_REVISION_REVIEW_ROUTE_PATH_DYNAMIC = (
  { revisionId } = {
    revisionId: '[revisionId]',
  },
) => `/admin/revision/${revisionId}/review`;

export const ADMIN_REVISION_REVIEW_DATA_NAME = {
  REVIEW: 'review',
  STATUS: 'status',
  PRICE: 'additionPrice',
  FILE_ID_LIST: 'fileReviewIdList',
  FILE_LIST: 'fileReview',
};

export const REVISION_STATUS = {
  NEW: 1,
  PROGRESS: 2,
  DONE: 3,
  PAY: 4,
  PAID: 5,
};
