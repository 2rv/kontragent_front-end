import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';
import { LandingButtonComponent } from '../../lib/common/landing';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingReviewDesktopComponent() {
  return (
    <Grid container spacing={{ xs: 4, lg: 6 }} justifyContent="center" lg={6}>
      <Grid item display={{ xs: 'none', lg: 'flex' }}>
        <Typography
          variant="landingTitle"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '16px',
              sm: 'landingTitle.fontSize',
            },
          }}
          children={text('LANDING.REVIEW.TITLE')}
        />
      </Grid>

      <Grid item display={{ xs: 'flex', lg: 'none' }}>
        <Typography
          variant="landingTitle"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '16px',
              sm: 'landingTitle.fontSize',
            },
          }}
          children={text('LANDING.REVIEW.MOBILE_TITLE')}
        />
      </Grid>

      <Grid item display={{ xs: 'none', lg: 'flex' }}>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
          children={text('LANDING.REVIEW.DESCRIPTION_1')}
        />
      </Grid>

      <Grid item display={{ xs: 'none', lg: 'flex' }}>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
          children={text('LANDING.REVIEW.DESCRIPTION_2')}
        />
      </Grid>

      <Grid item display={{ xs: 'flex', lg: 'none' }}>
        <Typography
          variant="landingText"
          sx={{
            color: '#fff',
            fontSize: {
              xs: '10px',
              sm: 'landingText.fontSize',
            },
          }}
          children={text('LANDING.REVIEW.MOBILE_DESCRIPTION')}
        />
      </Grid>

      <Grid item>
        <LandingButtonComponent
          tid={text('LANDING.COMMON.REGISTER_NOW')}
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
          sx={{
            backgroundColor: '#fff',
            color: '#3AB8FF',
            '&:hover': {
              background: '#f3f3f3',
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
