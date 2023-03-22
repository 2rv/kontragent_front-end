export const ADMIN_REVISION_KONTRAGENT_ITEM_ROUTE_PATH =
  '/admin/revision/kontragent/[revisionId]';

export const ADMIN_REVISION_KONTRAGENT_ITEM_ROUTE_PATH_DYNAMIC = (
  { revisionId } = {
    revisionId: '[revisionId]',
  },
) => `/admin/revision/kontragent/${revisionId}`;

export const ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME = {
  ID: 'id',
  CREATE_DATE: 'createDate',
  PRICE: 'price',
  PAYMENT_PRICE: 'paymentPrice',
  STATUS: 'status',

  REVISION_KONTRAGENT: 'revisionKontragent',
  DESCRIPRION: 'description',

  FILES: 'files',

  KONTRAGENT: 'kontragent',
  NAME: 'name',

  PERIOD: 'period',
  YEAR: 'year',
  KVARTAL_1: 'kvartal1',
  KVARTAL_2: 'kvartal2',
  KVARTAL_3: 'kvartal3',
  KVARTAL_4: 'kvartal4',

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
