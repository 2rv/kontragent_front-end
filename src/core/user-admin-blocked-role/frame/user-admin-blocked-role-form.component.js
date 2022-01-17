import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import Grid from '@mui/material/Grid';

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
        <Grid lg={6} xs={12} item>
          <Button
            type="submit"
            variant="red"
            disabled={isSubmitDisabled()}
            onClick={updateUserRole}
            fullWidth
          >
            {text('USER_ADMIN_ROLE.BUTTON.BLOCKED')}
          </Button>
        </Grid>
      )}

      {isBlocked && (
        <Grid lg={6} xs={12} item>
          <Button
            type="submit"
            disabled={isSubmitDisabled()}
            onClick={updateUserRole}
            fullWidth
          >
            {text('USER_ADMIN_ROLE.BUTTON.UNBLOCKED')}
          </Button>
        </Grid>
      )}
    </Box>
  );
};
