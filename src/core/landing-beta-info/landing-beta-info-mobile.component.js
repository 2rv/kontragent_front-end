import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

export function LandingBetaInfoMobileComponent({ graphicData }) {
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
      <Box sx={{ display: 'grid', gap: '12px' }}>
        <Title variant="landingTitle">
          {text('LANDING.BETA_INFO.TITLE')}
        </Title>
        <SmallText variant="landingText">
          {text('LANDING.BETA_INFO.DESCRIPTION')}
        </SmallText>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', position: 'relative' }}>
        {graphicData.map((graphic, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', sm: '12px' } }}>
            <GraphicContainer>
              <GraphicCricle>
                <GraphicCirclePoint />
              </GraphicCricle>
              {Boolean(index % 2 === 0) && (
                <GraphicLineContainer>
                  <GraphicLine />
                  <GraphicPoint />
                </GraphicLineContainer>
              )}
            </GraphicContainer>
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
    line-height: 21px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
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

const GraphicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const GraphicCricle = styled.div`
  border: 3px solid #3AB8FF;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GraphicCirclePoint = styled.div`
  background-color: #3AB8FF;
  width: 5.6px;
  height: 5.6px;
  border-radius: 50%;
`;

const GraphicLineContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 15px;
`;

const GraphicPoint = styled.div`
  background-color: #3AB8FF;
  width: 9px;
  height: 9px;
  border-radius: 50%;
`;

const GraphicLine = styled.div`
  border-bottom: 1px solid #B5B5B5;
  width: 95%;
`;
