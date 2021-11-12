export const ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH =
  '/admin/revision/[revisionId]';
export const ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH_DYNAMIC = (
  { revisionId } = {
    revisionId: '[revisionId]',
  },
) => `/admin/revision/${revisionId}`;

export const ADMIN_REVISION_REVIEW_ITEM_DATA_NAME = {
  DESCRIPRION: 'description',
  FILE_DESCRIPRION: 'fileDescription',
  REVIEW: 'review',
  FILE_REVIEW: 'fileReview',
  STATUS: 'status',
  PRICE: 'price',
  YEAR: 'year',
  NAME: 'name',
  PERIOD: 'period',
};
