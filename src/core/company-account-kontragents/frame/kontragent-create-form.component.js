import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { text } from '../../../lib/common/text';

import { Formik } from 'formik';
import { KontragentCreateFormFieldsComponent } from './kontragent-create-form-fields.component';

export function KontragentCreateFormComponent({
  initialValue,
  validation,
  onSubmitForm,
  isPending,
  isError,
  errorMessage,
  pageLoading,
}) {
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

        <Formik
          initialValues={initialValue}
          validate={validation}
          onSubmit={onSubmitForm}
        >
          {(props) => (
            <KontragentCreateFormFieldsComponent
              {...props}
              isPending={isPending}
              isError={isError}
              errorMessage={errorMessage}
              pageLoading={pageLoading}
            />
          )}
        </Formik>
      </Box>
    </Paper>
  );
}
