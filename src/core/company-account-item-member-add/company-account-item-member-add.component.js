import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

import { text } from '../../lib/common/text';

import { Formik } from 'formik';

import { CompanyAccountItemMemberAddFormComponent } from './frame/company-account-item-member-add-form.component';

export function CompanyAccountItemMemberAddComponent(props) {
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
              {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.TITLE')}
            </Typography>
            <Typography variant="subTitle" component="div">
              {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.SUBTITLE')}
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <CompanyAccountItemMemberAddFormComponent
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
                {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
              </Alert>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
