import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingGetNotificationDesktopComponent() {
  return (
    <Grid container spacing={8} direction="row" justifyContent="flex-start">
      <Grid item lg={6} container spacing={{ xs: 4, sm: 6 }}>
        <Grid item>
          <Typography
            variant="landingTitle"
            sx={{
              fontSize: {
                xs: '16px',
                sm: 'landingTitle.fontSize',
              },
            }}
          >
            {text('LANDING.GET_NOTIFICATION.TITLE')}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="landingText"
            sx={{
              fontSize: {
                xs: '10px',
                sm: 'landingText.fontSize',
              },
            }}
          >
            {text('LANDING.GET_NOTIFICATION.DESCRIPTION_1')}
            <br />
            {text('LANDING.GET_NOTIFICATION.DESCRIPTION_2')}
          </Typography>
        </Grid>

        <Grid item>
          <LandingButtonComponent
            tid={text('LANDING.COMMON.REGISTER_NOW')}
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          />
        </Grid>
      </Grid>

      <Grid item lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <img
          src={`/static/img/landing/landing-get-notification/info-image.svg`}
        />
      </Grid>
    </Grid>
  );
}
