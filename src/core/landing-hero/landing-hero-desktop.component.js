import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';

export function LandingHeroDesktopComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '32px',
        minHeight: '95vh',
      }}
    >
      <Typography variant="landingTitleHero">
        {text('LANDING.HERO.TITLE')}
      </Typography>
      <Typography variant="landingText" sx={{ fontSize: '20px', lineHeight: '35px', maxWidth: '600px' }}>
        {text('LANDING.HERO.DESCRIPTION')}
      </Typography>
      <LandingButtonComponent tid={text('LANDING.HERO.BUTTON_TEXT')} />
    </Box>
  );
}
