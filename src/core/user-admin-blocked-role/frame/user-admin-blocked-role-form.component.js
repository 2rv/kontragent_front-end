import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';

export const UserAdminBlockedRoleForm = (props) => {
  const { isError, updateUserRole, isBlocked, isPending } = props;

  const isSubmitDisabled = () => {
    if (isError) {
      return false;
    }

    if (isPending) {
      return true;
    }
  };
  return (
    <Box>
      {!isBlocked && (
        <Button
          type="submit"
          variant="red"
          disabled={isSubmitDisabled()}
          onClick={updateUserRole}
        >
          {text('USER_ADMIN_ROLE.BUTTON.BLOCKED')}
        </Button>
      )}

      {isBlocked && (
        <Button
          type="submit"
          disabled={isSubmitDisabled()}
          onClick={updateUserRole}
        >
          {text('USER_ADMIN_ROLE.BUTTON.UNBLOCKED')}
        </Button>
      )}
    </Box>
  );
};
