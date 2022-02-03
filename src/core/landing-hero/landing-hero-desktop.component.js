import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingButtonComponent } from '../../lib/common/landing';
import { text } from '../../lib/common/text';
import { setLinkRedirect } from '../../main/navigation';
import { HOME_ROUTE_PATH } from '../landing';

export function LandingHeroDesktopComponent() {
  return (
    <Grid
      container
      spacing={{ lg: 8, xs: 6 }}
      maxWidth="610px"
      sx={{
        minHeight: {
          lg: '95vh',
          xs: '400px',
        },
      }}
    >
      <Grid item>
        <Typography
          variant="landingTitleHero"
          sx={{
            fontSize: {
              sm: 'landingTitleHero.fontSize',
              xs: '16px',
            },
          }}
          children={text('LANDING.HERO.TITLE')}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="landingText"
          sx={{
            fontSize: {
              sm: '20px',
              xs: '14px',
            },
          }}
        >
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
