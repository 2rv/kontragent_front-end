import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';
import { LandingButtonComponent } from '../../lib/common/landing';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingAboutDesktopComponent() {
  return (
    <Grid
      container
      spacing={{
        sm: 6,
        xs: 4,
      }}
      maxWidth="700px"
    >
      <Grid item>
        <Typography
          variant="landingTitle"
          sx={{
            fontSize: {
              sm: 'landingTitle.fontSize',
              xs: '16px',
            },
          }}
          children={text('LANDING.ABOUT.TITLE')}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            fontSize: {
              xs: '12px',
              sm: 'landingText.fontSize',
            },
          }}
        >
          {text('LANDING.ABOUT.DESCRIPTION_1')}
          <br />
          {text('LANDING.ABOUT.DESCRIPTION_2')}
        </Typography>
      </Grid>

      <Grid item>
        <LandingButtonComponent
          tid={text('LANDING.COMMON.REGISTER_NOW')}
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
        />
      </Grid>
    </Grid>
  );
}
