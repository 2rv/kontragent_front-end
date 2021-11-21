export const USER_ADMIN_ITEM_INFO_DATA_NAME = {
  ID: 'id',
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

export const USER_ADMIN_ITEM_INFO_STORE_NAME = 'USER_ADMIN_ITEM_INFO';

export const USER_ADMIN_ITEM_INFO_ACTION_TYPE = {
  FORM_PENDING: 'USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_ERROR',
};
