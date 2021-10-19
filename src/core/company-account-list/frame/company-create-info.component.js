import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { redirect } from '../../../main/navigation/navigation.core';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_CREATE_ROUTE_PATH } from '../../company-account-create';

export function CompanyCreateInfoComponent() {
  return (
    <Paper>
      <Box>
        <Box sx={{ pb: 4 }}>
          <Typography variant="title" sx={{ pb: 2 }} component="div">
            {text('COMPANY_ACCOUNT_LIST.CREATE_COMPANY.TITLE')}
          </Typography>
          <Typography variant="subTitle" component="div">
            {text('COMPANY_ACCOUNT_LIST.CREATE_COMPANY.SUBTITLE')}
          </Typography>
        </Box>

        <Grid container>
          <Grid xs={3}>
            <Button
              onClick={() => {
                redirect(COMPANY_ACCOUNT_CREATE_ROUTE_PATH);
              }}
            >
              {text('COMPANY_ACCOUNT_LIST.CREATE_COMPANY.BUTTON')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
