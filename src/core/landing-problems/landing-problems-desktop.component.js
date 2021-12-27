import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingProblemsMobileComponent } from './landing-problems-mobile.component';

export function LandingProblemsDesktopComponent() {
  return (
    <>
      <BubbleSvg src="/static/img/landing/2-bubble.svg" />
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '300px',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: '16px',
          }}
        >
          <Typography variant="landingTitle">
            Сталкиваетесь с этими проблемами?
          </Typography>
          <Typography variant="landingText">
            Мы раскроем вам правду и предложим решение!
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon src="/static/img/landing/landing-problems/icon-1.svg" />
              <Typography variant="landingText">Побуждение откорректировать<br /> декларацию и заплатить бюджет?</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon src="/static/img/landing/landing-problems/icon-2.svg" />
              <Typography variant="landingText">Регулярные вызовы<br /> на комиссию КАО ИФНС?</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon src="/static/img/landing/landing-problems/icon-3.svg" />
              <Typography variant="landingText">Частые запросы со стороны ИФНС<br /> вне рамок налоговых проверок?</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const BubbleSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
