import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';

import { Formik } from 'formik';

import { AuthRecoveryAccountForm } from './frame/auth-recovery-account-form.component';

export function AuthRecoveryAccountComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
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
            <Typography variant="heading" gutterBottom component="div">
              {text('AUTH.RECOVERY.TITLE')}
            </Typography>
            <Typography variant="subtitle" component="div">
              {text('AUTH.RECOVERY.ENTER_ACCOUNT_EMAIL_FOR_RESTORE_ACCESS')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <AuthRecoveryAccountForm
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>

          {isError && (
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          )}

          {isSuccess && (
            <Alert severity="success">
              {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
            </Alert>
          )}

          {isPending && <LinearProgress />}
        </Box>
      </Paper>
    </Box>
  );
}
