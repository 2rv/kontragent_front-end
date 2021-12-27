import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';

export function LandingHeroMobileComponent() {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '400px',
        gap: '16px',
      }}
    >
      <Title variant="landingTitleHero">
        Платформа бизнес-сообщества
      </Title>
      <SmallText variant="landingText">
        Выявите налоговые риски с недобросовестными контрагентами в режиме онлайн
      </SmallText>
      <LandingButtonComponent tid="Узнать больше" />
    </Box>
  );
}

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
