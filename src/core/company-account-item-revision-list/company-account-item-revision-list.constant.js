export const COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH =
  '/company/[companyId]/revision';
export const COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision`;

export const COMPANY_ACCOUNT_ITEM_REVISION_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  TITLE: 'title',
  STATUS: 'status',
};
