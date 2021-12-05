import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { AdminBillRevisionFormComponent } from './frame/admin-bill-revision-form.component';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export function AdminBillRevisionComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
    setFileList,
    onSubmitClose,
    onSubmitDelete,
  } = props;

  const isSubmitDisabled = () => {
    return isPending || pageLoading || isSuccess;
  };

  return (
    <Paper>
      <Box>
        <Typography variant="title" sx={{ pb: 4 }} component="div">
          {text('ADMIN_BILL_REVISION.SUB_TITLE')}
        </Typography>
        <Typography variant="subTitle" sx={{ pb: 4 }} component="div">
          {text('ADMIN_BILL_REVISION.INFO_TITLE')}
        </Typography>

        <Divider />

        <Formik
          initialValues={initialValue}
          onSubmit={(values, actions) => {
            onSubmitForm(values, actions.setSubmitting);
          }}
        >
          {(props) => (
            <AdminBillRevisionFormComponent
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
        <Grid item>
          <Divider sx={{ mb: 4 }} />
        </Grid>
        <Grid item>
          <Button onClick={onSubmitClose} fullWidth>
            {text('ADMIN_BILL_REVISION.BUTTON.FULFILLED')}
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="red"
            sx={{ mt: 4 }}
            onClick={onSubmitDelete}
            fullWidth
            disabled={isSubmitDisabled()}
          >
            {text('ADMIN_BILL_REVISION.BUTTON.CLOSED')}
          </Button>
        </Grid>

        <Typography variant="fieldLabel" sx={{ pt: 4 }} component="div">
          {text('ADMIN_BILL_REVISION.INFO')}
        </Typography>

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
  );
}
