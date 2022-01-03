import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';
import { text } from '../../lib/common/text';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  const desktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const mobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '24px',
          minHeight: { xs: '500px', lg: '440px' },
        }}
      >
        <Box
          sx={{
            gap: { xs: '12px', lg: '24px' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title variant="landingTitle">
            {text('LANDING.BETA_INFO.TITLE')}
          </Title>
          <SmallText variant="landingText" sx={{ maxWidth: '550px' }}>
            {text('LANDING.BETA_INFO.DESCRIPTION')}
          </SmallText>
        </Box>
        <Box>
          <GraphicContainer>
            {graphicData.map((graphic, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  {Boolean(desktopBreakpoint) && <img src={graphic.svgCircle} />}
                  {Boolean(mobileBreakpoint) && <img src={graphic.svgCircleMobile} />}
                  {graphic.svgLine && (
                    <GraphicLine src={graphic.svgLine} />
                  )}
                </Box>
                <GraphicText variant="title">{graphic.date}</GraphicText>
                <ul style={{ listStyle: 'inherit', marginLeft: '16px' }}>
                  {graphic.tasks.map((task, index) => (
                    <li key={index}><GraphicDescription variant="landingText">{task}</GraphicDescription></li>
                  ))}
                </ul>
              </Box>
            ))}
          </GraphicContainer>
        </Box>
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  @media (min-width: 0px) and (max-width: 600px) {
    background-image: url("/static/img/landing/landing-beta-info/background-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1366px) and (max-width: 1600px) {
    background-image: url("/static/img/landing/landing-beta-info/background-1366.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1601px) {
    background-image: url("/static/img/landing/landing-beta-info/background-1600.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const GraphicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  div {
    gap: 16px;
    @media (min-width: 0px) and (max-width: 600px) {
      gap: 6px;
    }
  }
`;

const GraphicLine = styled.img`
  position: absolute;
  left: 45px;
  max-width: 252px;
  @media (max-width: 1140px) {
    display: none;
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

const GraphicText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    margin-top: 4px;
    font-size: 12px;
    line-height: 18px;
  }
`;

const GraphicDescription = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 10px;
    line-height: 15px;
  }
`;
