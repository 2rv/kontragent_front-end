import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';
import { LandingButtonComponent } from '../../lib/common/landing';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingStartNowDesktopComponent() {
  return (
    <Grid container spacing={{ xs: 4, lg: 6 }} justifyContent="center" lg={7.2}>
      <Grid item>
        <Typography
          variant="landingTitle"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '16px',
              sm: 'landingTitle.fontSize',
            },
          }}
        >
          {text('LANDING.START_NOW.TITLE')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
        >
          {text('LANDING.START_NOW.DESCRIPTION_1')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
        >
          {text('LANDING.START_NOW.DESCRIPTION_2')}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
        >
          {text('LANDING.START_NOW.DESCRIPTION_3')}
        </Typography>
      </Grid>

      <Grid item>
        <LandingButtonComponent
          tid={text('LANDING.COMMON.REGISTER_NOW')}
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          sx={{
            backgroundColor: '#fff',
            color: '#3AB8FF',
            marginTop: { xs: '6px', lg: 'inherit' },
            '&:hover': {
              background: '#f3f3f3',
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
