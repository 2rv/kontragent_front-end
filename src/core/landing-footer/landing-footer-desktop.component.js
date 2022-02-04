import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterDesktopComponent() {
  return (
    <Grid container direction="row" spacing={8} justifyContent="space-between">
      <Grid
        item
        container
        direction="row"
        spacing={8}
        xs="auto"
        alignItems="flex-start"
      >
        <Grid item container spacing={2} xs="auto">
          <Grid item>
            <Typography
              variant="body2"
              sx={{ fontWeight: '600', color: '#000' }}
            >
              {text('LANDING.FOOTER.HOME')}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.SIGNUP')}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.AUTHORIZATION')}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={2} xs="auto">
          <Grid item>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                redirect(
                  'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/terms-of-the-offer.pdf',
                  { newTab: true },
                )
              }
            >
              {text('LANDING.FOOTER.PRIVACY_POLICITY')}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                redirect(
                  'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/user-agreement.pdf',
                  { newTab: true },
                )
              }
            >
              {text('LANDING.FOOTER.PRIVACY_USER_TERMS')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container spacing={2} xs="auto" alignItems="flex-end">
        <Grid item>
          <img height="22px" src="/static/img/logo.svg" />
        </Grid>

        <Grid item>
          <Typography variant="body1">
            © 2021 Контрагент. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
