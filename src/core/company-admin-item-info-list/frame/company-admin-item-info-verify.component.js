import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { redirect, getQuery } from '../../../main/navigation/navigation.core';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH_DYNAMIC } from '../../company-account-item-revision-create';

export function CompanyAdminItemInfoVerify() {
  return (
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
              onClick={() => {
                return redirect(
                  COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH_DYNAMIC,
                  {
                    dynamic: true,
                    params: {
                      companyId: getQuery('companyId'),
                    },
                  },
                );
              }}
            >
              {text('COMPANY_ADMIN_ITEM_INFO.VERIFY_COMPANY.BUTTON_TEXT')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
