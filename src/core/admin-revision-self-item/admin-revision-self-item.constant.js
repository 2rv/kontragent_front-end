export const ADMIN_REVISION_SELF_ITEM_ROUTE_PATH =
  '/admin/revision/self/[revisionId]';

export const ADMIN_REVISION_SELF_ITEM_ROUTE_PATH_DYNAMIC = (
  { revisionId } = {
    revisionId: '[revisionId]',
  },
) => `/admin/revision/self/${revisionId}`;

export const ADMIN_REVISION_SELF_ITEM_DATA_NAME = {
  ID: 'id',
  CREATE_DATE: 'createDate',
  PAYMENT_PRICE: 'paymentPrice',
  PRICE: 'price',
  STATUS: 'status',

  PERIOD: 'period',
  YEAR: 'year',
  KVARTAL_1: 'kvartal1',
  KVARTAL_2: 'kvartal2',
  KVARTAL_3: 'kvartal3',
  KVARTAL_4: 'kvartal4',

  DESCRIPRION: 'description',
  FILES: 'files',

  REVIEW: 'review',
  FILES_REVIEW: 'filesReview',

  COMPANY_ID: 'companyId',
  COMPANY: 'company',
  COMPANY_NAME: 'name',
  COMPANY_INN: 'inn',

  CREATOR_ID: 'creatorId',
  CREATOR: 'creator',
  CREATOR_LOGIN: 'login',
  CREATOR_FIRSTNAME: 'firstname',
  CREATOR_LASTNAME: 'lastname',
};
