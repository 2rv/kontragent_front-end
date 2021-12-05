import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { CompanyAccountKontragentsListComponent } from './frame/company-account-kontragents-list.component';

import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { text } from '../../lib/common/text';
import { KontragentCreateFormComponent } from './frame/kontragent-create-form.component';

export function CompanyAccountKontragentsComponent({
  data,
  isPending,
  isError,
  isSuccess,
  errorMessage,
  pageLoading,
  initialValue,
  validation,
  onSubmitForm,
}) {
  return (
    <Grid spacing={6} container>
      <Grid item>
        <KontragentCreateFormComponent
          initialValue={initialValue}
          validation={validation}
          onSubmitForm={onSubmitForm}
          isPending={isPending}
          isError={isError}
          errorMessage={errorMessage}
          pageLoading={pageLoading}
        />
      </Grid>
      <Grid item>
        <Paper sx={{ p: 0 }}>
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
      </Grid>
    </Grid>
  );
}
