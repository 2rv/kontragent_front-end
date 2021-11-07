export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH =
  '/company/[companyId]/revision/[revisionId]';
export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH_DYNAMIC = (
  { companyId, revisionId } = {
    companyId: '[companyId]',
    revisionId: '[revisionId]',
  },
) => `/company/${companyId}/revision/${revisionId}`;

export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME = {
  DESCRIPRION: 'description',
  FILE_DESCRIPRION: 'fileDescription',
  REVIEW: 'review',
  FILE_REVIEW: 'fileReview',
  STATUS: 'status',
  PRICE: 'price',
};
