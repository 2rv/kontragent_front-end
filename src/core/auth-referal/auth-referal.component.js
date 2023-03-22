import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { redirect } from '../../main/navigation/navigation.core';

import { text } from '../../lib/common/text';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

import { getQuery } from '../../main/navigation/navigation.core';
import { setLocalData } from '../../main/store/store.service';
import { LOCAL_STORAGE_KEY } from './auth-referal.constant';

export function AuthReferalComponent() {
  const data = getQuery('referalId');
  return (
    <Box>
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper>
        <Box>
          <Box>
            <Typography
              sx={{
                pb: 2,
                fontSize: '22px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              {text('AUTH.REFERAL.TITLE')}
            </Typography>

            <Typography
              sx={{
                color: '#707070',
                fontSize: '16px',
                textAlign: 'left',
                pb: 4,
              }}
            >
              {text('AUTH.REFERAL.DESCRIPTION')}
            </Typography>

            <Grid sx={{ p: 0 }} item>
              <Button
                fullWidth
                variant="contained"
                type="button"
                onClick={() => {
                  setLocalData(LOCAL_STORAGE_KEY, data);
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
