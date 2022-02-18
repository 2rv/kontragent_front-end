import { Formik } from 'formik';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

import { text } from '../../lib/common/text';

import { AdminRevisionKontragentReviewCreateFormComponent } from './frame/admin-revision-kontragent-review-create-form.component';

export function AdminRevisionKontragentReviewCreateComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    initialValue,
    onSubmitForm,
    data,
  } = props;

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="title"
          children={text('ADMIN_REVISION_REVIEW.FORM.TITLE')}
        />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmitForm}
          enableReinitialize
        >
          {(props) => (
            <AdminRevisionKontragentReviewCreateFormComponent
              data={data}
              {...props}
            />
          )}
        </Formik>
      </Grid>

      {isPending && (
        <Grid item>
          <LinearProgress />
        </Grid>
      )}
      {isSuccess && (
        <Grid item>
          <Alert severity="success">
            {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
          </Alert>
        </Grid>
      )}
      {isError && (
        <Grid item>
          <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
        </Grid>
      )}
    </Grid>
  );
}
