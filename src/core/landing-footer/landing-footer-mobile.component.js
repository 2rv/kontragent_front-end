import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';
import { redirect } from '../../main/navigation';
import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { AUTH_LOGIN_ROUTE_PATH } from '../auth-login';

export function LandingFooterMobileComponent() {
  return (
    <Grid container spacing={8}>
      <Grid
        item
        container
        spacing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item container spacing={3} xs="auto">
          <Grid item>
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', fontWeight: 600, color: '#252525' }}
            >
              {text('LANDING.FOOTER.HOME')}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.SIGNUP')}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => redirect(AUTH_LOGIN_ROUTE_PATH)}
            >
              {text('LANDING.FOOTER.AUTHORIZATION')}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={3} xs="auto">
          <Grid item>
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
          </Grid>

          <Grid item>
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

      <Grid item container spacing={2}>
        <Grid item>
          <img height="20px" src="/static/img/logo.svg" />
        </Grid>

        <Grid item>
          <Typography variant="body1" sx={{ fontSize: '12px' }}>
            © 2021 Контрагент. Все права защищены.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
