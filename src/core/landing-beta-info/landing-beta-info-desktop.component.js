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
        <Box
          sx={{
            gap: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="landingTitle">
            {text('LANDING.BETA_INFO.TITLE')}
          </Typography>
          <Typography variant="landingText" sx={{ maxWidth: '550px' }}>
            {text('LANDING.BETA_INFO.DESCRIPTION')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '102%' }}>
          {graphicData.map((graphic, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={graphic.svgCircle} />
                {graphic.svgLine && (
                  <img src={graphic.svgLine} />
                )}
              </Box>
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
