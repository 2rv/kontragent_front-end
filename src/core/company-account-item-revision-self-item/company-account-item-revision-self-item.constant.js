export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH =
  '/company/[companyId]/revision/self/[revisionId]';
export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH_DYNAMIC = (
  { companyId, revisionId } = {
    companyId: '[companyId]',
    revisionId: '[revisionId]',
  },
) => `/company/${companyId}/revision/self/${revisionId}`;

export const COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_DATA_NAME = {
  ID: 'id',
  CREATE_DATE: 'createDate',
  PRICE: 'price',
  STATUS: 'status',

  DESCRIPRION: 'description',

  FILES: 'files',

  NAME: 'name',

  PERIOD: 'period',
  YEAR: 'year',
  KVARTAL_1: 'kvartal1',
  KVARTAL_2: 'kvartal2',
  KVARTAL_3: 'kvartal3',
  KVARTAL_4: 'kvartal4',

  REVIEW: 'review',
  FILES_REVIEW: 'filesReview',
};
