export const COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH =
  '/company/[companyId]/balance';
export const COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/balance`;
