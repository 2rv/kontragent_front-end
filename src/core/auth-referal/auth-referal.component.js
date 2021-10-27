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
            <Typography
              sx={{
                pb: 2,
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              {text('AUTH.REFERAL.TITLE')}
            </Typography>

            <Typography
              sx={{
                color: '#707070',
                fontSize: '14px',
                textAlign: 'left',
                pb: 4,
              }}
            >
              {text('AUTH.REFERAL.DESCRIPTION')}
            </Typography>

            <Grid item>
              <Button
                fullWidth
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
