import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import {
  LandingLayout,
  LandingButtonComponent,
} from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

export function LandingAboutDesktopComponent() {
  return (
    <Layout id="about">
      <Grid
        container
        spacing={6}
        minHeight={{ xs: '300px', lg: '350px' }}
        maxWidth="700px"
      >
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
            {text('LANDING.ABOUT.TITLE')}
          </Typography>
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
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  @media (min-width: 1000px) {
    background-image: url('/static/img/landing/landing-about/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;
