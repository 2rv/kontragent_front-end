import { Formik } from 'formik';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';
import { text } from '../../lib/common/text';

import { CompanyAccountItemKontragentListComponent } from './frame/company-account-item-kontragent-list.component';
import { CompanyAccountItemKontragentCreateFormComponent } from './frame/company-account-item-kontragent-create-form.component';

export function CompanyAccountItemKontragentComponent(props) {
  const {
    data,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    isCreatePending,
    isCreateError,
    isCreateSuccess,
    createErrorMessage,
    initialValue,
    validation,
    onSubmitForm,
    pageLoading,
  } = props;
  return (
    <>
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

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <CompanyAccountItemKontragentCreateFormComponent
                {...props}
                isPending={isCreatePending}
                isError={isCreateError}
                errorMessage={createErrorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>

          {isCreateError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">
                {text(`ERROR.${createErrorMessage}`)}
              </Alert>
            </Box>
          )}
          {isCreateSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.SUCCESS')}
              </Alert>
            </Box>
          )}
        </Box>
      </Paper>
      <Paper sx={{ p: 0, mt: 6 }}>
        <Box>
          <Typography variant="heading" sx={{ px: 8, pt: 8 }} component="div">
            {text('COMPANY_ACCOUNT_KONTRAGENTS.TITLE')}
          </Typography>
          <Divider sx={{ mx: 8, my: 4 }} />
          {isSuccess && (
            <CompanyAccountItemKontragentListComponent list={data} />
          )}
          {isPending && (
            <Box sx={{ pt: 4, px: 8, pb: 8 }}>
              <SkeletonListComponent />
            </Box>
          )}
          {isError && (
            <Box sx={{ pt: 4, px: 8, pb: 8 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
        </Box>
      </Paper>
    </>
  );
}
