import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function LandingPrinciplesDesktopComponent() {
  return (
    <>
      <PolygonSvg src="/static/img/landing/polygon-white-background.svg" />
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
            Платформа придерживается некоторым принципам
          </Typography>
          <Typography variant="landingText">
            Вот 3 основных из них:
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
              <Icon src="/static/img/landing/landing-principles/icon-1.svg" />
              <Typography variant="landingText">Мы приносим пользу и ценность<br /> предпринимателям</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon src="/static/img/landing/landing-principles/icon-2.svg" />
              <Typography variant="landingText">Мы ценим наших клиентов и дорожим<br /> их доверием</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon src="/static/img/landing/landing-principles/icon-3.svg" />
              <Typography variant="landingText">Мы гарантируем качество и<br /> ответственность результата</Typography>
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

const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;

const BubbleSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
