import { Formik } from 'formik';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';

import { AdminRevisionReviewFormComponent } from './frame/admin-revision-kontragent-review-create-form.component';

export function AdminRevisionKontragentReviewCreateComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    initialValue,
    onSubmitForm,
  } = props;

  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              {text('ADMIN_REVISION_REVIEW.FORM.TITLE')}
            </Typography>
          </Box>

          <Divider />

          <Formik
            initialValues={initialValue}
            onSubmit={(values, actions) => {
              onSubmitForm(values, actions.setSubmitting);
            }}
          >
            {(props) => (
              <AdminRevisionReviewFormComponent
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
                setFileList={setFileList}
              />
            )}
          </Formik>
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
              </Alert>
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
