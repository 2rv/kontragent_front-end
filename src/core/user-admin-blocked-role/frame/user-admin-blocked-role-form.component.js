import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import { USER_ADMIN_BLOCKED_ROLE_DATA_NAME } from '../user-admin-blocked-role.constant';
import { USER_ROLE } from '../../../lib/common/auth/auth.constant';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { TextField } from '@material-ui/core';

export const UserAdminBlockedRoleForm = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    isPending,
    pageLoading,
    updateUserRole,
    isBlocked,
    isError,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField
          type="hidden"
          name={USER_ADMIN_BLOCKED_ROLE_DATA_NAME.ROLE}
          value={values[USER_ADMIN_BLOCKED_ROLE_DATA_NAME.ROLE]}
        />

        {!isBlocked && (
          <Button type="submit" variant="red" onClick={updateUserRole}>
            {text('USER_ADMIN_ROLE.BUTTON.BLOCKED')}
          </Button>
        )}

        {isBlocked && (
          <Button type="submit" onClick={updateUserRole}>
            {text('USER_ADMIN_ROLE.BUTTON.UNBLOCKED')}
          </Button>
        )}
      </Box>
    </form>
  );
};
