import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { redirect } from '../../main/navigation/navigation.core';

import { text } from '../../lib/common/text';

import { Formik } from 'formik';

import { AuthLoginFormComponent } from './frame/auth-login-form.component.js';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export function AuthLoginComponent(props) {
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
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="heading" gutterBottom component="div">
              {text('AUTH.LOGIN.TITLE')}
            </Typography>
            <Typography variant="subtitle" component="div">
              {text('AUTH.LOGIN.LOGIN_TO_ACCOUNT')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <AuthLoginFormComponent
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>
          <Divider />
          <Box sx={{ pt: 4 }}>
            <div>
              <Typography variant="subtext" component="div">
                {text('AUTH.LOGIN.ALREADY_REGISTERED')}{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect(AUTH_SIGNUP_ROUTE_PATH);
                  }}
                >
                  {text('AUTH.LOGIN.CREATE_ACCOUNT')}
                </Link>
              </Typography>
              <Typography variant="subtext" component="div">
                {text('AUTH.LOGIN.FORGOT_PASSWORD')}{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH);
                  }}
                >
                  {text('AUTH.LOGIN.RESTORE_ACCESS')}
                </Link>
              </Typography>
            </div>
          </Box>

          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('AUTH.LOGIN.FORM.SUCCESS')}
              </Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
