import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { text } from '../../lib/common/text';
import { UserAdminRoleFormComponent } from './frame/user-admin-role-form.component';
import { Formik } from 'formik';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import { UserAdminBlockedRoleContainer } from '../user-admin-blocked-role/user-admin-blocked-role.container';

export function UserAdminRoleComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              {text('USER_ADMIN_ROLE.TITLE')}
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ mt: 4 }}>
            <UserAdminBlockedRoleContainer />
          </Box>

          <Formik initialValues={initialValue} onSubmit={onSubmitForm}>
            {(props) => (
              <UserAdminRoleFormComponent
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
              </Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
