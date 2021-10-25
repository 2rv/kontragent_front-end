import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { redirect } from '../../main/navigation/navigation.core';

import { text } from '../../lib/common/text';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function AuthReferalComponent() {
  return (
    <Box sx={{ py: 4, px: 4 }}>
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="heading" gutterBottom component="div">
              {text('AUTH.REFERAL.TITLE')}
            </Typography>

            <Grid item>
              <Button
                type="button"
                onClick={() => {
                  redirect(AUTH_SIGNUP_ROUTE_PATH);
                }}
              >
                {' '}
                {text('AUTH.REFERAL.BUTTON.TITLE')}
              </Button>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
