import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingPrinciplesMobileComponent() {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        minHeight: '300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Title variant="landingTitle">
          {text('LANDING.PRINCIPLES.TITLE')}
        </Title>
        <SmallText variant="landingText">
          {text('LANDING.PRINCIPLES.DESCRIPTION')}
        </SmallText>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '24px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/static/img/landing/landing-principles/icon-1-mobile.svg" />
          <SmallText variant="landingText">Мы приносим пользу и ценность предпринимателям</SmallText>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/static/img/landing/landing-principles/icon-2-mobile.svg" />
          <SmallText variant="landingText">Мы ценим наших клиентов и дорожим их доверием</SmallText>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/static/img/landing/landing-principles/icon-3-mobile.svg" />
          <SmallText variant="landingText">Мы гарантируем качество и ответственность результата</SmallText>
        </Box>
      </Box>
    </Box>
  );
}

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
