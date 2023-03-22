import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from './user-admin-blocked-role.constant';

export const convertUserAdminBlockedRoleFormData = (role) => ({
  [USER_ADMIN_BLOCKED_ROLE_DATA_NAME.ROLE]: role,
});
