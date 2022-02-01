export const COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH =
  '/company/[companyId]/revision';

export const COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision`;
