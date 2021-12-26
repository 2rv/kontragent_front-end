import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { LandingHeroMobileComponent } from './landing-hero-mobile.component';

export function LandingHeroDesktopComponent() {
  return (
    <Layout>
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          minHeight: '85vh',
        }}
      >
        <Box display="flex" alignItems="center" gap="32px">
          <Box display="flex" flexDirection="column" gap="32px" width="850px">
            <Title variant="landingTitleHero">
              Платформа бизнес-сообщества
            </Title>
            <SmallText variant="landingText">
              Выявите налоговые риски с недобросовестными контрагентами в режиме онлайн
            </SmallText>
            <LandingButtonComponent tid="Узнать больше" />
          </Box>
          <Box>
            <img src="/static/img/landing/landing-hero/info-image.svg" />
          </Box>
        </Box>
      </Box>
      <LandingHeroMobileComponent />
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
  @media (min-width: 1601px) {
    background-image: url("/static/img/landing/landing-hero/background-max-display.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallText = styled(Typography)`
  font-size: 20px;
  line-height: 35px;
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
