import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <LandingLayout>
      <PolygonSvg src="/static/img/landing/polygon.svg" />
      <Box item display="flex" flexDirection="column">
        <Typography variant="landingTitleHero">
          Наша платформа в Бета-версии
        </Typography>
        <Typography variant="landingText" sx={{ mt: 6, mb: 6, maxWidth: '700px' }}>
          Каждый месяц мы внедряем новый функционал в нашу платформу
          и постоянно улучшаем текущий. Станьте первыми, кто получит
          уникальные бонусы от пользования нашей платформы.
        </Typography>
      </Box>
      <Box item>
        <GraphicContainer>
          {graphicData.map((graphic, index) => (
            <Box key={index} display="flex" flexDirection="column" width="245px">
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', mb: 6 }}>
                <GraphicCircle src={graphic.svgCircle} />
                {graphic.svgLine && (
                  <GraphicLine src={graphic.svgLine} />
                )}
              </Box>
              <Typography variant="title" sx={{ mb: 5 }}>{graphic.date}</Typography>
              {graphic.tasks.map((task, index) => (
                <Typography key={index} variant="landingText">{task}</Typography>
              ))}
            </Box>
          ))}
        </GraphicContainer>
      </Box>
    </LandingLayout>
  );
}

const GraphicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const GraphicCircle = styled.img`
  width: 45px;
  height: 45px;
`;

const GraphicLine = styled.img`
  position: absolute;
  left: 45px;
  width: 100%;
  max-width: 235px;

  @media (max-width: 1140px) {
    display: none;
  }
`;

const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1270px) {
    display: none;
  }
`;
