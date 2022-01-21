import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';

export function LandingHeroMobileComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '400px',
        gap: '16px',
      }}
    >
      <Title variant="landingTitleHero">
        {text('LANDING.HERO.TITLE')}
      </Title>
      <SmallText variant="landingText">
        {text('LANDING.HERO.DESCRIPTION')}
      </SmallText>
      <LandingButtonComponent tid={text('LANDING.HERO.BUTTON_TEXT')} />
    </Box>
  );
}

const Title = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 21px;
  }
`;

const SmallText = styled(Typography)`
  @media (min-width: 0px) and (max-width: 600px) {
    font-weight: 500;
    line-heigth: 150%;
    font-size: 14px;
    line-height: 18px;
  }
`;