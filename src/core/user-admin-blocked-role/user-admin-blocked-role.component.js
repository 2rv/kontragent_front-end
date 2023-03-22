import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../lib/common/text';
import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from './user-admin-blocked-role.constant';
import { Formik } from 'formik';
import { UserAdminBlockedRoleForm } from './frame/user-admin-blocked-role-form.component';
import { UserAdminBlockedRoleContainer } from '../user-admin-blocked-role/user-admin-blocked-role.container';

export function UserAdminBlockedRoleComponent(props) {
  const { isBlocked, isError, pageLoading, isPending, updateUserRole } = props;

  return (
    <UserAdminBlockedRoleForm
      isPending={isPending}
      isError={isError}
      pageLoading={pageLoading}
      isBlocked={isBlocked}
      updateUserRole={updateUserRole}
    />
  );
}
