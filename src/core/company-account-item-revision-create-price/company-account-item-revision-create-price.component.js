import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import { text } from '../../lib/common/text';

export function CompanyAccountItemRevisionCreatePriceComponent({
  isRequestPending,
  isRequestError,
  isRequestSuccess,
  getRequestErrorMessage,
  total,
  submitDisabled,
  onClick,
}) {
  return (
    <Grid columnSpacing={5} container>
      <Grid item>
        <Typography variant="subtitle" component="div">
          {total}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onClick} disabled={submitDisabled} fullWidth>
          {text('Оплатить')}
        </Button>
      </Grid>
      {isRequestError && (
        <Box sx={{ pt: 4 }}>
          <Alert severity="error">
            {text(`ERROR.${getRequestErrorMessage}`)}
          </Alert>
        </Box>
      )}
      {isRequestSuccess && (
        <Box sx={{ pt: 4 }}>
          <Alert severity="success">
            {text('COMMON.REQUEST_SENT_SUCCESSFULLY')}
          </Alert>
        </Box>
      )}
      {isRequestPending && (
        <Box sx={{ pt: 4, width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Grid>
  );
}
