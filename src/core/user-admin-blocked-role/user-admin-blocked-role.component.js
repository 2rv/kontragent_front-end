import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { text } from '../../lib/common/text';

export function UserAdminBlockedRoleComponent(props) {
  const { initialValue, pageLoading, isPending, onSubmitForm, setBlocked } =
    props;

  return (
    <Box>
      {(props) => (
        <Button
          {...props}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          pageLoading={pageLoading}
          setBlocked={setBlocked}
        >
          {text('USER_ADMIN_ROLE.BUTTON.BLOCKED')}
        </Button>
      )}
    </Box>
  );
}
