import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

export function LandingProblemsMobileComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
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
          {text('LANDING.PROBLEMS.MOBILE_TITLE')}
        </Title>
        <SmallText variant="landingText">
          {text('LANDING.PROBLEMS.DESCRIPTION')}
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
          <img src="/static/img/landing/landing-problems/icon-1-mobile.svg" />
          <SmallText variant="landingText">Побуждение откорректировать декларацию и заплатить бюджет?</SmallText>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/static/img/landing/landing-problems/icon-2-mobile.svg" />
          <SmallText variant="landingText">Регулярные вызовы на комиссию КАО ИФНС?</SmallText>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/static/img/landing/landing-problems/icon-3-mobile.svg" />
          <SmallText variant="landingText">Частые запросы со стороны ИФНС вне рамок налоговых проверок?</SmallText>
        </Box>
      </Box>
    </Box>
  );
}

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
