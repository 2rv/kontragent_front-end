import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  LandingLayout,
  LandingButtonComponent,
} from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';

export function LandingGetNotificationDesktopComponent() {
  return (
    <Layout>
      <PolygonSvg src="/static/img/landing/polygon-white-background.svg" />
      <Grid
        container
        spacing={8}
        direction="row"
        justifyContent="flex-start"
        minHeight={{ xs: '300px', lg: '400px' }}
      >
        <Grid item xs={6} container spacing={6}>
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
              variant="body1"
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: 'body1.fontSize',
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

        <Grid item xs={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <img
            src={`/static/img/landing/landing-get-notification/info-image.svg`}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  position: relative;
`;
const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
