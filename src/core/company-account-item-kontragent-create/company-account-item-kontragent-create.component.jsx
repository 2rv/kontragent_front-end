import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { Formik } from 'formik';
import { text } from '../../lib/common/text';

import { CompanyAccountItemKontragentCreateFormComponent } from './frame/company-account-item-kontragent-create-form.component';

export function CompanyAccountItemKontragentCreateComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    validation,
    onSubmitForm,
  } = props;
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" sx={{ pb: 2 }} component="div">
            {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.TITLE')}
          </Typography>
          <Typography variant="subTitle" component="div">
            {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.SUBTITLE')}
          </Typography>
        </Box>
        <Divider />
        <Formik
          enableReinitialize
          initialValues={initialValue}
          validate={validation}
          onSubmit={onSubmitForm}
        >
          {(props) => (
            <CompanyAccountItemKontragentCreateFormComponent
              {...props}
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
              {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.SUCCESS')}
            </Alert>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
