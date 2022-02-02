import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterDesktopComponent() {
  return (
    <Grid
      container
      direction="row"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '32px',
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
          <Grid
            item
            sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: '600', color: '#000' }}
            >
              {text('LANDING.FOOTER.HOME')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.SIGNUP')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.AUTHORIZATION')}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
            justifyContent="flex-start"
          >
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
            {/* <Typography
              variant="body2"
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                redirect(
                  'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/blank.pdf',
                  { newTab: true },
                )
              }
            >
              {text('LANDING.FOOTER.PRIVACY_TERMS')}
            </Typography> */}
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
        <Typography variant="body1">
          © 2021 Контрагент. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
