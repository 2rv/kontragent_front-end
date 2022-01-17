import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { Formik } from 'formik';

import { CompanyAccountKontragentsListComponent } from './frame/company-account-kontragents-list.component';
import { CompanyAccountKontragentFormFieldsComponent } from './frame/company-account-kontragent-form-fields.component';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { text } from '../../lib/common/text';

export function CompanyAccountKontragentsComponent({
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
}) {
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
              <CompanyAccountKontragentFormFieldsComponent
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
              <Alert severity="error">{text(`ERROR.${createErrorMessage}`)}</Alert>
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
          <Typography
            variant="heading"
            sx={{ px: 8, pt: 8 }}
            component="div"
          >
            {text('COMPANY_ACCOUNT_KONTRAGENTS.TITLE')}
          </Typography>
          <Divider sx={{ mx: 8, my: 4 }} />
          {isSuccess && <CompanyAccountKontragentsListComponent list={data} />}
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
