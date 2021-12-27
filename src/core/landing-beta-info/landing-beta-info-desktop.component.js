import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing';

export function LandingBetaInfoDesktopComponent({ graphicData }) {
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
            Наша платформа в Бета-версии
          </Title>
          <SmallText variant="landingText" sx={{ maxWidth: '550px' }}>
            Каждый месяц мы внедряем новый функционал в нашу платформу
            и постоянно улучшаем текущий. Станьте первыми, кто получит
            уникальные бонусы от пользования нашей платформы.
          </SmallText>
        </Box>
        <Box>
          <GraphicContainer>
            {graphicData.map((graphic, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <GraphicCircle src={graphic.svgCircle} />
                  {graphic.svgLine && (
                    <GraphicLine src={graphic.svgLine} />
                  )}
                </Box>
                <GraphicText variant="title">{graphic.date}</GraphicText>
                <ul style={{ listStyle: 'inherit', marginLeft: '15px' }}>
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
  @media (min-width: 1366px) {
    background-image: url("/static/img/landing/landing-beta-info/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 0px) and (max-width: 599px) {
    background-image: url("/static/img/landing/landing-beta-info/background-mobile.svg");
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
    @media (min-width: 0px) and (max-width: 599px) {
      gap: 6px;
    }
  }
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
  max-width: 252px;
  @media (max-width: 1140px) {
    display: none;
  }
`;

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const GraphicText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 599px) {
    margin-top: 5px;
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
