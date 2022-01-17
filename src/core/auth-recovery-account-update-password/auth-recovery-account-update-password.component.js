import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';

import { Formik } from 'formik';

import { AuthRecoveryAccountUpdatePasswordForm } from './frame/auth-recovery-account-update-password-form.component.js';

export function AuthRecoveryAccountUpdatePasswordComponent(props) {
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
              {text('AUTH.RECOVERY_UPDATE_PASSWORD.TITLE')}
            </Typography>
            <Typography variant="subtitle" component="div">
              {text('AUTH.RECOVERY_UPDATE_PASSWORD.INFO')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <AuthRecoveryAccountUpdatePasswordForm
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
            <Box>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box>
              <Alert severity="success">
                {text('AUTH.RECOVERY_UPDATE_PASSWORD.FORM.SUCCESS')}
              </Alert>
            </Box>
          )}
          {isPending && <LinearProgress />}
        </Box>
      </Paper>
    </Box>
  );
}
