import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';

export function LandingHeroDesktopComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        minHeight: '85vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          width: '850px',
        }}
      >
        <Typography variant="landingTitleHero">
          {text('LANDING.HERO.TITLE')}
        </Typography>
        <Typography variant="landingText" sx={{ fontSize: '20px', lineHeight: '35px' }}>
          {text('LANDING.HERO.DESCRIPTION')}
        </Typography>
        <LandingButtonComponent tid={text('LANDING.HERO.BUTTON_TEXT')} />
      </Box>
      <Box>
        <img src="/static/img/landing/landing-hero/info-image.svg" />
      </Box>
    </Box>
  );
}
