import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

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
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="title" component="div">
            {text('Цена проверки')}
          </Typography>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Grid item>
          <Grid
            spacing={3}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            flexWrap="wrap"
          >
            <Grid item xs={8}>
              <Typography sx={{ pb: 1 }} variant="title" component="div">
                {total}
              </Typography>
              <Typography variant="subTitle" component="div">
                {text('*С учетом вычета НДС и налогов')}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={onClick} disabled={submitDisabled} fullWidth>
                {text('Оплатить')}
              </Button>
            </Grid>
          </Grid>
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
    </Paper>
  );
}
