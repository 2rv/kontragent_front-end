import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { Formik } from 'formik';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionCreateFormComponent } from './frame/company-account-item-revision-create-form.component.js';

export function CompanyAccountItemRevisionCreateComponent(props) {
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
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION.TITLE')}
            </Typography>
            <Typography variant="subTitle" component="div">
              {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION.INFO')}
            </Typography>
          </Box>

          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <CompanyAccountItemRevisionCreateFormComponent
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
