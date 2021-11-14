export const USER_ADMIN_ITEM_INFO_DATA_NAME = {
  LOGIN: 'login',
  FIRST_NAME: 'firstname',
  LAST_NAME: 'lastname',
  PHONE: 'phone',
  EMAIL: 'email',
  CONFIRM_EMAIL: 'confirmEmail',
  CONFIRM_PHONE: 'confirmPhone',
  ROLE: 'role',
};

export const USER_ADMIN_ITEM_INFO_ROUTE_PATH = '/admin/user/[userId]/info';
export const USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC = (
  { userId } = {
    userId: '[userId]',
  },
) => `/admin/user/${userId}/info`;
