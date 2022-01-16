import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { text } from '../../lib/common/text';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <>
      <PolygonSvg src="/static/img/landing/polygon.svg" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '24px',
          minHeight: '440px',
          position: 'relative',
        }}
      >
        <Box sx={{ gap: '24px', display: 'grid' }}>
          <Typography variant="landingTitle">
            {text('LANDING.BETA_INFO.TITLE')}
          </Typography>
          <Typography variant="landingText" sx={{ maxWidth: '550px' }}>
            {text('LANDING.BETA_INFO.DESCRIPTION')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {graphicData.map((graphic, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <GraphicContainer>
                <GraphicCricle>
                  <GraphicPoint />
                </GraphicCricle>
                {(graphicData.length - 1 !== index) && (
                  <GraphicLineContainer>
                    <GraphicLine />
                    <GraphicPoint />
                    <GraphicLine />
                  </GraphicLineContainer>
                )}
              </GraphicContainer>
              <Typography variant="title">{graphic.date}</Typography>
              <ul style={{ listStyle: 'inherit', marginLeft: '16px' }}>
                {graphic.tasks.map((task, index) => (
                  <li key={index}><Typography variant="landingText">{task}</Typography></li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

const PolygonSvg = styled.img`
  position: absolute;
  @media (max-width: 1366px) {
    display: none;
  }
  @media (min-width: 1366px) and (max-width: 1600px) {
    top: 40%;
    left: -10%;
  }
  @media (min-width: 1600px) {
    top: 40%;
    left: -23%;
  }
`;

const GraphicContainer = styled.div`
  display: flex;
  width: 100%;
`;

const GraphicLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GraphicCricle = styled.div`
  border: 3px solid #3AB8FF;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GraphicPoint = styled.div`
  background-color: #3AB8FF;
  padding: 4.5px;
  border-radius: 50%;
`;

const GraphicLine = styled.div`
  border-bottom: 1px solid #B5B5B5;
  width: 100%;
`;
