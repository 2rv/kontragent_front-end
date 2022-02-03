import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';
import {
  LandingLayout,
  LandingButtonComponent,
} from '../../lib/common/landing';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingReviewDesktopComponent() {
  return (
    <Layout>
      <Grid
        container
        spacing={{ xs: 3, lg: 6 }}
        justifyContent="center"
        minHeight={{ xs: '300px', lg: '400px' }}
        lg={6}
      >
        <Grid item>
          <Typography
            display={{ xs: 'none', lg: 'flex' }}
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

        <Grid item>
          <Typography
            display={{ xs: 'flex', lg: 'none' }}
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

        <Grid item>
          <Typography
            display={{ xs: 'none', lg: 'flex' }}
            variant="landingText"
            sx={{
              color: '#fff',
              fontSize: {
                xs: '12px',
                sm: 'landingText.fontSize',
              },
            }}
            children={text('LANDING.REVIEW.DESCRIPTION_1')}
          />
        </Grid>

        <Grid item>
          <Typography
            display={{ xs: 'none', lg: 'flex' }}
            variant="landingText"
            sx={{
              color: '#fff',
              fontSize: {
                xs: '12px',
                sm: 'landingText.fontSize',
              },
            }}
            children={text('LANDING.REVIEW.DESCRIPTION_2')}
          />
        </Grid>

        <Grid item>
          <Typography
            display={{ xs: 'flex', lg: 'none' }}
            variant="landingText"
            sx={{
              color: '#fff',
              fontSize: {
                xs: '12px',
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
              marginTop: { xs: '6px', lg: 'inherit' },
              '&:hover': {
                background: '#f3f3f3',
              },
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3ab8ff;
  @media (min-width: 1000px) {
    background-image: url('/static/img/landing/landing-review/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;
