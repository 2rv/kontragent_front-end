import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
  return (
    <Layout>
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
              <Box key={index} display="flex" flexDirection="column">
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <GraphicCircle src={graphic.svgCircle} />
                  {graphic.svgLine && (
                    <GraphicLine src={graphic.svgLine} />
                  )}
                </Box>
                <Title variant="title" sx={{ my: 4 }}>{graphic.date}</Title>
                {graphic.tasks.map((task, index) => (
                  <SmallText key={index} variant="landingText">{task}</SmallText>
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
  @media (min-width: 1366px) {
    background-image: url("/static/img/landing/landing-beta-info/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 0px) and (max-width: 599px) {
    background-image: url("/static/img/landing/landing-beta-info/background-mobile.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
`;

const GraphicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const GraphicCircle = styled.img`
  width: 45px;
  height: 45px;
  @media (min-width: 0px) and (max-width: 599px) {
    width: 28px;
    height: 28px;
  }
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
