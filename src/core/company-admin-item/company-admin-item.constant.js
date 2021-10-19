export const COMPANY_ADMIN_ITEM_ROUTE_PATH = '/admin/company/[companyId]';
export const COMPANY_ADMIN_ITEM_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/admin/company/${companyId}/`;
