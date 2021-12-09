export const COMPANY_ADMIN_ITEM_MEMBER_LIST_DATA_NAME = {
  LIST: 'list',
  USER: 'user',
  EMAIL: 'email',
  PHONE: 'phone',
  FIRSTNAME: 'firstname',
  LASTNAME: 'lastname',
  LOGIN: 'login',
  ROLE: 'role',
  ID: 'id',
};

export const COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH =
  '/admin/company/[companyId]/member-list';
export const COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/admin/company/${companyId}/member-list`;
