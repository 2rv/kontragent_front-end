export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH =
  '/company/[companyId]/revision/self';

export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision/self`;
