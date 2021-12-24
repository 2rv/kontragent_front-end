import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <Layout>
      <PolygonSvg src="/static/img/landing/polygon.svg" />
      <Box display="flex" flexDirection="column" gap="20px">
        <Box item display="flex" flexDirection="column" gap="20px">
          <Title variant="landingTitleHero">
            Наша платформа в Бета-версии
          </Title>
          <SmallText variant="landingText" sx={{ maxWidth: '700px' }}>
            Каждый месяц мы внедряем новый функционал в нашу платформу
            и постоянно улучшаем текущий. Станьте первыми, кто получит
            уникальные бонусы от пользования нашей платформы.
          </SmallText>
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
      </Box>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  position: relative;
`;

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

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const PolygonSvg = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  @media (max-width: 1366px) {
    display: none;
  }
`;
