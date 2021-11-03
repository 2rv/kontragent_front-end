export const COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH =
  '/company/[companyId]/member';
export const COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/member`;
