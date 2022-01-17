export const COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH =
  '/admin/company/[companyId]/info';
export const COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/admin/company/${companyId}/info`;
