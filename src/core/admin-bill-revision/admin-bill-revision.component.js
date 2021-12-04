import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { AdminBillRevisionFormComponent } from './frame/admin-bill-revision-form.component';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';

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
  } = props;

  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography
              variant="title"
              sx={{ px: 8, pt: 8, pb: 4 }}
              component="div"
            >
              {text('ADMIN_BILL_REVISION.SUB_TITLE')}
              {data[ADMIN_BILL_INFO_DATA_NAME.ID]}
            </Typography>
            <Typography
              variant="subTitle"
              sx={{ px: 8, pb: 4 }}
              component="div"
            >
              {text('ADMIN_BILL_REVISION.INFO_TITLE')}
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
