export const COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  FILE_ID_LIST: 'fileIdList',
};

export const COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH =
  '/company/[companyId]/revision/create';
export const COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision/create`;
