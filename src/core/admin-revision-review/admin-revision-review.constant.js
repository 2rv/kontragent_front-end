export const ADMIN_REVISION_REVIEW_ROUTE_PATH =
  '/admin/company/[companyId]/revision/[revisionId]/review';
export const ADMIN_REVISION_REVIEW_ROUTE_PATH_DYNAMIC = (
  { companyId, revisionId } = {
    companyId: '[companyId]',
    revisionId: '[revisionId]',
  },
) => `/admin/company/${companyId}/revision/${revisionId}/review`;

export const ADMIN_REVISION_REVIEW_DATA_NAME = {
  REVIEW: 'review',
  STATUS: 'status',
  PRICE: 'price',
  FILE_ID_LIST: 'fileReviewIdList',
};

export const REVISION_STATUS = {
  NEW: 1,
  PROGRESS: 2,
  DONE: 3,
  PAY: 4,
  PAID: 5,
};
