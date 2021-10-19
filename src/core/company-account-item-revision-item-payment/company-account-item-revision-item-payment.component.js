import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionItemPaymentFormComponent } from './frame/company-account-item-revision-item-payment-form.component';

export function CompanyAccountItemRevisionItemPaymentComponent(props) {
  const {
    pageLoading,
    isPending,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
    data,
  } = props;
  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_PAYMENT.TITLE')}{' '}
              {data.price} RUB
            </Typography>
            <Typography variant="subTitle" component="div">
              {text('COMPANY_ACCOUNT_ITEM_REVISION.REVISION_PAYMENT.INFO')}
            </Typography>
          </Box>
          <Divider />

          <CompanyAccountItemRevisionItemPaymentFormComponent
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
            onSubmitForm={onSubmitForm}
          />

          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_PAYMENT.MONEY_DEBITED_FROM_ACCOUNT',
                )}
              </Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
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
