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
};

export const ADMIN_REVISION_REVIEW_STORE_NAME = 'ADMIN_REVISION_REVIEW';

export const ADMIN_REVISION_REVIEW_ACTION_TYPE = {
  FORM_PENDING: 'ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_ERROR',
  FORM_RESET: 'ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_RESET',
};

export const REVISION_STATUS = {
  NEW: 1,
  PROGRESS: 2,
  DONE: 3,
  PAY: 4,
  PAID: 5,
};
