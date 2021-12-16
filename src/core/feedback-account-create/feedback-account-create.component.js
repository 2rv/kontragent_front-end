import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { FeedbackAccountCreateFormComponent } from './frame/feedback-account-create-form.component';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

export function FeedbackAccountCreateComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
    setFileList,
  } = props;
  return (
    <Box>
      <Paper>
        <Box>
          <Typography variant="title" sx={{ pb: 4 }} component="div">
            {text('FEEDBACK_ACCOUNT_CREATE.TITLE')}
          </Typography>
          <Typography variant="subTitle" sx={{ pb: 4 }} component="div">
            {text('FEEDBACK_ACCOUNT_CREATE.INFO')}
          </Typography>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <FeedbackAccountCreateFormComponent
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
