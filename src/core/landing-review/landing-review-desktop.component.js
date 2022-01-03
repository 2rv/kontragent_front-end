import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AUTH_SIGNUP_ROUTE_PATH } from '../auth-signup';
import { LandingLayout, LandingButtonComponent } from '../../lib/common/landing';
import { redirect } from '../../main/navigation';
import { text } from '../../lib/common/text';

export function LandingReviewDesktopComponent() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: { xs: '12px', lg: '24px' },
          minHeight: { xs: '300px', lg: '400px' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Title variant="landingTitle" sx={{ color: '#fff' }}>
            {text('LANDING.REVIEW.TITLE')}
          </Title>
          <SmallText variant="landingText" sx={{ color: '#fff', maxWidth: '600px' }}>
            {text('LANDING.REVIEW.DESCRIPTION_1')}
          </SmallText>
          <SmallText variant="landingText" sx={{ color: '#fff', maxWidth: '600px' }}>
            {text('LANDING.REVIEW.DESCRIPTION_2')}
          </SmallText>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', lg: 'none' },
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Title variant="landingTitle" sx={{ color: '#fff' }}>
            {text('LANDING.REVIEW.MOBILE_TITLE')}
          </Title>
          <SmallText variant="landingText" sx={{ color: '#fff' }}>
            {text('LANDING.REVIEW.MOBILE_DESCRIPTION')}
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
    background-image: url("/static/img/landing/landing-review/background.svg");
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
