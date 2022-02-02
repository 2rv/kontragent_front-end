import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterMobileComponent() {
  return (
    <Grid
      container
      direction="row"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '36px',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6px',
          }}
        >
          <Grid
            item
            sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', fontWeight: '600', color: '#000' }}
            >
              {text('LANDING.FOOTER.HOME')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.SIGNUP')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.AUTHORIZATION')}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            justifyContent="flex-start"
          >
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', cursor: 'pointer' }}
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
              sx={{ fontSize: '12px', cursor: 'pointer' }}
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
              sx={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() =>
                redirect(
                  'https://xn--80aggrpdcrrf.xn--p1ai/static/pdf/terms-of-the-offer.pdf',
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
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <img height="20px" src="/static/img/logo.svg" />
        <Typography variant="body1" sx={{ fontSize: '12px' }}>
          © 2021 Контрагент. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
