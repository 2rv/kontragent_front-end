export const USER_ADMIN_ITEM_COMPANY_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  NAME: 'name',
  COMPANY_MEMBER: 'companyMember',
  ROLE: 'role',
  INN: 'inn',
};

export const USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH =
  '/admin/user/[userId]/company';
export const USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH_DYNAMIC = (
  { userId } = {
    userId: '[userId]',
  },
) => `/admin/user/${userId}/company`;
