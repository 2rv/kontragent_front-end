import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';

export function CompanyAdminItemInfoVerificateComponent(props) {
  const {
    companyVerified,
    verifyButtonAction,
    isVerifyCompanyPending,
    isVerifyCompanyError,
    isVerifyCompanySuccess,
    pageLoading,
  } = props;

  const isVerifyButtonDisabled = () => {
    return isVerifyCompanyPending || isVerifyCompanySuccess || pageLoading;
  };

  return !companyVerified ? (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" component="div">
            {text('COMPANY_ADMIN_ITEM_INFO.VERIFY_COMPANY.TITLE')}
          </Typography>
        </Box>

        <Grid container>
          <Grid xs={3}>
            <Button
              disabled={isVerifyButtonDisabled()}
              onClick={() => {
                verifyButtonAction();
              }}
            >
              {text('COMPANY_ADMIN_ITEM_INFO.VERIFY_COMPANY.BUTTON_TEXT')}
            </Button>
          </Grid>
        </Grid>

        {isVerifyCompanyError && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
          </Box>
        )}
        {isVerifyCompanySuccess && (
          <Box sx={{ pt: 4 }}>
            <Alert severity="success">
              {text('COMPANY_ADMIN_ITEM_INFO.VERIFY_COMPANY.SUCCESS')}
            </Alert>
          </Box>
        )}
        {isVerifyCompanyPending && (
          <Box sx={{ pt: 4, width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </Box>
    </Paper>
  ) : null;
}
