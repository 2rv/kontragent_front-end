import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

export function LandingGetNotificationDesktopComponent() {
  return (
    <Layout>
      <PolygonSvg src="/static/img/landing/polygon-white-background.svg" />
      <Box
        sx={{
          minHeight: { xs: '280px', lg: '350px' },
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '12px', lg: '24px' },
          }}
        >
          <Title variant="landingTitle">
            {text('LANDING.GET_NOTIFICATION.TITLE')}
          </Title>
          <SmallText variant="landingText" sx={{ maxWidth: '700px' }}>
            {text('LANDING.GET_NOTIFICATION.DESCRIPTION')}
          </SmallText>
          <LandingButtonComponent
            tid={text('LANDING.COMMON.REGISTER_NOW')}
            onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
            sx={{ marginTop: { xs: '5px', lg: 'inherit' } }}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <img src="/static/img/landing/landing-get-notification/info-image.svg" />
        </Box>
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  position: relative;
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
