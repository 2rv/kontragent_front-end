import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

export function LandingStartNowDesktopComponent() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: { xs: '12px', lg: '24px' },
          minHeight: '400px',
        }}
      >
        <Title variant="landingTitle" sx={{ color: '#fff' }}>
          {text('LANDING.START_NOW.TITLE')}
        </Title>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            {text('LANDING.START_NOW.DESCRIPTION_1')}
          </SmallText>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            {text('LANDING.START_NOW.DESCRIPTION_2')}
          </SmallText>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            {text('LANDING.START_NOW.DESCRIPTION_3')}
          </SmallText>
        </Box>
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
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #3AB8FF;
  @media (min-width: 1000px) {
    background-image: url("/static/img/landing/landing-start-now/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
