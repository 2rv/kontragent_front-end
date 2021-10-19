export const COMPANY_ACCOUNT_ITEM_ROUTE_PATH = '/company/[companyId]';
export const COMPANY_ACCOUNT_ITEM_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/`;
