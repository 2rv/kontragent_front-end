import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';
import { setLinkRedirect } from '../../main/navigation';
import { HOME_ROUTE_PATH } from '../landing';

export function LandingHeroDesktopComponent() {
  return (
    <Grid container spacing={8} maxWidth="610px" minHeight="95vh">
      <Grid item>
        <Typography variant="landingTitleHero">
          {text('LANDING.HERO.TITLE')}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="landingText" sx={{ fontSize: '20px' }}>
          {text('LANDING.HERO.DESCRIPTION')}
        </Typography>
      </Grid>
      <Grid item>
        <LandingButtonComponent
          onClick={setLinkRedirect(HOME_ROUTE_PATH + '#about')}
          tid={text('LANDING.HERO.BUTTON_TEXT')}
        />
      </Grid>
    </Grid>
  );
}
