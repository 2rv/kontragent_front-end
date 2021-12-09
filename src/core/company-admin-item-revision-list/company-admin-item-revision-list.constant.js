export const COMPANY_ADMIN_ITEM_REVISION_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  STATUS: 'status',
  CREATE_DATE: 'createDate',
};

export const COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/admin/company/${companyId}/revision-list`;
export const COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH =
  '/admin/company/[companyId]/revision-list';
