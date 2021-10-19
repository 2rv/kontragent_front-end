export const USER_ADMIN_ITEM_ROUTE_PATH = '/admin/user/[userId]';
export const USER_ADMIN_ITEM_ROUTE_PATH_DYNAMIC = (
  { userId } = {
    userId: '[userId]',
  },
) => `/admin/user/${userId}/`;
