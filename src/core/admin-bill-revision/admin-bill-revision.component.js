import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import { AdminBillRevisionFormComponent } from './frame/admin-bill-revision-form.component';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { BILL_STATUS } from '../company-bill-list/company-bill-list.constant';

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
    isClosePending,
    isCloseSuccess,
    isCloseError,
    isDeletePending,
    isDeleteSuccess,
    isDeleteError,
    onSubmitClose,
    onSubmitDelete,
    data,
  } = props;

  const isSubmitCloseDisabled = () => {
    return isClosePending || pageLoading;
  };

  const isSubmitDeleteDisabled = () => {
    return isDeletePending || pageLoading;
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
          onSubmit={(values, { resetForm }) => {
            onSubmitForm(values, resetForm);
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
          {isSuccess && (
            <Box sx={{ pt: 2, pb: 4 }}>
              <Alert severity="success">
                {text('ADMIN_BILL_REVISION.SUCCESSFULLY')}
              </Alert>
            </Box>
          )}

          {isError && (
            <Box sx={{ pt: 2, pb: 4 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
          <Divider sx={{ mb: 4 }} />
        </Grid>
        {data.data?.status !== BILL_STATUS.FULFILLED ? (
          <Grid item>
            <Button
              sx={{ mb: 2 }}
              onClick={onSubmitClose}
              disabled={isSubmitCloseDisabled()}
              fullWidth
            >
              {text('ADMIN_BILL_REVISION.BUTTON.FULFILLED')}
            </Button>
          </Grid>
        ) : null}

        <Grid item>
          <Button
            variant="red"
            onClick={onSubmitDelete}
            fullWidth
            disabled={isSubmitDeleteDisabled()}
          >
            {text('ADMIN_BILL_REVISION.BUTTON.CLOSED')}
          </Button>
        </Grid>

        <Typography variant="fieldLabel" sx={{ pt: 4 }} component="div">
          {text('ADMIN_BILL_REVISION.INFO')}
        </Typography>

        {isCloseSuccess && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="success">
              {text('ADMIN_BILL_REVISION.FULFILLED')}
            </Alert>
          </Box>
        )}

        {isCloseError && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}

        {isDeleteSuccess && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="success">
              {text('ADMIN_BILL_REVISION.CLOSED')}
            </Alert>
          </Box>
        )}

        {isDeleteError && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
