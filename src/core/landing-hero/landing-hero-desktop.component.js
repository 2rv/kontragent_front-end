import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';

export function LandingHeroDesktopComponent() {
  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: { xs: '400px', lg: '90vh' } }}
      >
        <Box display="flex" flexDirection="column" gap="20px">
          <Title variant="landingTitle">
            Платформа бизнес-сообщества
          </Title>
          <SmallText variant="landingText">
            Выявите налоговые риски с недобросовестными контрагентами в режиме онлайн
          </SmallText>
          <LandingButtonComponent
            tid="Узнать больше"
            sx={{ width: '100%', maxWidth: '320px' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <img src="/static/img/landing/landing-hero/info-image.png" />
        </Box>
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  padding: 0;
  max-height: 100vh;
  @media (min-width: 0px) and (max-width: 599px) {
    background-image: url("/static/img/landing/landing-hero/background-mobile.svg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
  }
  @media (min-width: 999px) and (max-width: 1281px) {
    background-image: url("/static/img/landing/landing-hero/background-1280.svg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
  }
  @media (min-width: 1279px) and (max-width: 1367px) {
    background-image: url("/static/img/landing/landing-hero/background-1366.svg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
  }
  @media (min-width: 1367px) and (max-width: 1601px) {
    background-image: url("/static/img/landing/landing-hero/background-1600.svg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
  }
  @media (min-width: 1601px) and (max-width: 1900px) {
    background-image: url("/static/img/landing/landing-hero/background-max-display.svg");
    background-repeat: no-repeat;
    background-position: 50% 60%;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
