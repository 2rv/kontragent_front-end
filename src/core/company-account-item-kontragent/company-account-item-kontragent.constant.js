export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH =
  '/company/[companyId]/kontragent';

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/kontragent`;
