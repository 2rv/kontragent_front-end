import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { redirect } from '../../main/navigation/navigation.core';

import { Formik } from 'formik';

import { text } from '../../lib/common/text';

import { AuthSignupFormComponent } from './frame/auth-signup-form.component';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export function AuthSignupComponent(props) {
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
              {text('AUTH.SIGNUP.TITLE')}
            </Typography>
            <Typography variant="subtitle" component="div">
              {text('AUTH.SIGNUP.CREATE_ACCOUNT')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <AuthSignupFormComponent
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
          <Box sx={{ pt: 2 }}>
            <div>
              <Typography variant="subtext" component="div">
                {text('AUTH.SIGNUP.ALREADY_REGISTERED')}{' '}
                <Link
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect(AUTH_LOGIN_ROUTE_PATH);
                  }}
                >
                  {text('AUTH.SIGNUP.LOGIN')}
                </Link>
              </Typography>
              <Typography variant="subtext" component="div">
                {text('AUTH.SIGNUP.FORGOT_PASSWORD')}{' '}
                <Link
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH);
                  }}
                >
                  {text('AUTH.SIGNUP.RESTORE_ACCESS')}
                </Link>
              </Typography>
            </div>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ pt: 2 }}>
            <div>
              <Typography variant="subtext" component="div">
                {text('AUTH.SIGNUP.TERMS_OF_THE_OFFER_CONDITIONS')}
              </Typography>
              <Typography variant="subtext" component="div">
                {text('AUTH.SIGNUP.TERMS_OF_THE_OFFER')}{' '}
                <Link
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                  component="button"
                  variant="body2"
                  target="_blank"
                  href="/static/pdf/blank.pdf"
                >
                  {text('AUTH.SIGNUP.READ')}
                </Link>
              </Typography>
              <Typography variant="subtext" component="div">
                {text('AUTH.SIGNUP.USER_AGREEMENT')}{' '}
                <Link
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                  component="button"
                  variant="body2"
                  target="_blank"
                  href="/static/pdf/blank.pdf"
                >
                  {text('AUTH.SIGNUP.READ')}
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
                {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
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
