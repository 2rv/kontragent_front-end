import { USER_ADMIN_ROLE_DATA_NAME } from './user-admin-role.constant';

export const convertUserAdminRoleFormData = (data) => ({
  [USER_ADMIN_ROLE_DATA_NAME.ROLE]: data[USER_ADMIN_ROLE_DATA_NAME.ROLE],
});
