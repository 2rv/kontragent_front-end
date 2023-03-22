export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH =
  '/company/[companyId]/revision/kontragent';

export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision/kontragent`;
