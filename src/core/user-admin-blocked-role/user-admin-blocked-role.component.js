import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../lib/common/text';
import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from './user-admin-blocked-role.constant';
import { Formik } from 'formik';
import { UserAdminBlockedRoleForm } from './frame/user-admin-blocked-role-form.component';

export function UserAdminBlockedRoleComponent(props) {
  const {
    initialValue,
    updateUserRole,
    isBlocked,
    isError,
    isSuccess,
    pageLoading,
    isPending,
  } = props;

  return (
    <Formik initialValues={initialValue} onSubmit={updateUserRole}>
      {(props) => (
        <UserAdminBlockedRoleForm
          {...props}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          isBlocked={isBlocked}
        />
      )}
    </Formik>
  );
}
