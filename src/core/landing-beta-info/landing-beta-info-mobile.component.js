import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

export function LandingBetaInfoMobileComponent({ graphicData }) {
  const graphicCircleDesktopBreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const graphicCircleMobileBreakpoint = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
        minHeight: { xs: '460px', sm: '600px' },
      }}
    >
      <Box
        sx={{
          gap: '12px',
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
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', position: 'relative' }}>
        {graphicData.map((graphic, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', sm: '12px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {Boolean(graphicCircleDesktopBreakpoint) && <GraphicCircle src={graphic.svgCircle} />}
              {Boolean(graphicCircleMobileBreakpoint) && <GraphicCircle src={graphic.svgCircleMobile} />}
              <GraphicLineContainer>
                <GraphicLine></GraphicLine>
                <GraphicLineCircle></GraphicLineCircle>
              </GraphicLineContainer>
            </Box>
            <GraphicText variant="title">{graphic.date}</GraphicText>
            <ul style={{ listStyle: 'inherit', marginLeft: '16px' }}>
              {graphic.tasks.map((task, index) => (
                <li key={index}><GraphicDescription variant="landingText">{task}</GraphicDescription></li>
              ))}
            </ul>
          </Box>
        ))}
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

const GraphicCircle = styled.img`
  z-index: 999;
`;

const GraphicLineContainer = styled.div`
  position: absolute;
  left: 25px;
  width: 90%;
`;

const GraphicLine = styled.div`
  border-bottom: 2px solid #B5B5B5;
`;

const GraphicLineCircle = styled.div`
  background-color: #3AB8FF;
  border: 1px solid #3AB8FF;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  right: -4px;
  bottom: -4px;
  @media (min-width: 600px) and (max-width: 1000px) {
    height: 12px;
    width: 12px;
    right: -5px;
    bottom: -5px;
  }
`;

const GraphicText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    margin-top: 3px;
    font-size: 12px;
    line-height: 18px;
  }
`;

const GraphicDescription = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 10px;
    line-height: 15px;
  }
`;
