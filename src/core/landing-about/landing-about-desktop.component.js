import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

export function LandingAboutDesktopComponent() {
  return (
    <Layout id="about">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: { xs: '300px', lg: '350px' },
          gap: { xs: '12px', lg: '24px' },
        }}
      >
        <Title variant="landingTitle">
          {text('LANDING.ABOUT.TITLE')}
        </Title>
        <SmallText variant="landingText" sx={{ maxWidth: '700px' }}>
          {text('LANDING.ABOUT.DESCRIPTION_1')}<br />
          {text('LANDING.ABOUT.DESCRIPTION_2')}
        </SmallText>
        <LandingButtonComponent
          tid={text('LANDING.COMMON.REGISTER_NOW')}
          sx={{ marginTop: { xs: '6px', lg: 'inherit' } }}
          onClick={() => redirect(AUTH_SIGNUP_ROUTE_PATH)}
        />
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #F3F3F3;
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-about/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
