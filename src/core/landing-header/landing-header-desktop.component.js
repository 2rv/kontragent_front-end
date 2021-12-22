import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { redirect } from '../../main/navigation';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';
import { LandingButtonComponent } from '../../lib/common/landing/landing-button.component';

export function LandingHeaderDesktopComponent({ activePath, headerLinks }) {
  return (
    <LandingLayout height="86px">
      <Grid container direction="row" alignItems="center" gap="10px">
        <Grid item xs>
          <img height="22px" src="/static/img/logo.svg" />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={6} direction="row" justifyContent="flex-start">
            {headerLinks.map((item, i) => (
              <Grid item key={i} alignItems="center">
                <Typography
                  key={i}
                  sx={
                    activePath === item.path
                      ? {
                          fontWeight: '600',
                          color: '#000',
                        }
                      : { color: '#707070', cursor: 'pointer' }
                  }
                >
                  {item.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container spacing={6} direction="row" alignItems="center" justifyContent="flex-end">
            <Grid item>
              <Typography
                sx={{ fontWeight: '600', color: '#000', cursor: 'pointer' }}
                onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
              >
                Вход
              </Typography>
            </Grid>
            <Grid item>
              <LandingButtonComponent
                tid="Регистрация"
                onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LandingLayout>
  );
}
