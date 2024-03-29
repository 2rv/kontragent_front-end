import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';

import { Formik } from 'formik';

import { text } from '../../lib/common/text';

import { UserReferalCreateFormComponent } from './frame/user-referal-create-form.component';

export function UserReferalCreateComponent(props) {
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
            <Typography variant="title" gutterBottom component="div">
              {text('USER_REFERAL.USER_REFERAL_CREATE.TITLE')}
            </Typography>
            <Typography sx={{ py: 1 }} variant="subTitle" component="div">
              {text('USER_REFERAL.USER_REFERAL_CREATE.INFO')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <UserReferalCreateFormComponent
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
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('USER_REFERAL.USER_REFERAL_CREATE.SUCCESS')}
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
