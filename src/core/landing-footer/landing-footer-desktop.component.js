import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterDesktopComponent() {
  return (
    <Box>
      <Layout>
        <Grid
          container
          direction="row"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '32px',
            padding: '16px 0',
          }}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '55px',
              }}
            >
              <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Typography variant="body2" sx={{ fontWeight: '600', color: '#000' }}>
                  {text('LANDING.FOOTER.HOME')}
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}>
                  {text('LANDING.FOOTER.SIGNUP')}
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}>
                  {text('LANDING.FOOTER.AUTHORIZATION')}
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>Privacy policy</Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>Privacy terms</Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>Privacy user terms</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            <img height="22px" src="/static/img/logo.svg" />
            <Typography variant="body1">© 2021 Контрагент. All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
`;
