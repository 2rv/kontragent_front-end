export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH =
  '/company/[companyId]/kontragent/[kontragentId]/revision';

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC =
  (
    { companyId, kontragentId } = {
      companyId: '[companyId]',
      kontragentId: '[kontragentId]',
    },
  ) => `/company/${companyId}/kontragent/${kontragentId}/revision`;

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  STATUS: 'status',
  CREATE_DATE: 'createDate',
};
