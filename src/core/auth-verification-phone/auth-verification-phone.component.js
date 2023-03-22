import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';

import { useDispatch } from 'react-redux';
import { authLogout } from '../../lib/common/auth/auth.action';

import { text } from '../../lib/common/text';

import { Formik } from 'formik';

import { AuthVerificationFormComponent } from './frame/auth-verification-phone-form.component.js';

export function AuthVerificationPhoneComponent(props) {
  const dispatch = useDispatch()
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
              {text('AUTH.VERIFICATION_PHONE.TITLE')}
            </Typography>
            <Typography variant="subtitle" component="div">
              {text('AUTH.VERIFICATION_PHONE.INFO')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <AuthVerificationFormComponent
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

          <Typography variant="subtext" component="div" align='justify'>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                dispatch(authLogout())
              }}
            >
              {text('AUTH.LOGOUT.BUTTON_TEXT')}
            </Link>
          </Typography>

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
