import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingPrinciplesDesktopComponent() {
  return (
    <LandingLayout>
      <Grid container gap="32px">
        <Grid item display="flex" flexDirection="column" textAlign="center">
          <Typography variant="landingTitleHero">
            Платформа придерживается некоторым принципам
          </Typography>
          <Typography variant="landingText">
            Вот 3 основных из них:
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="center" textAlign="center" gap="20px">
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Мы приносим пользу и ценность предпринимателям</Typography>
            </Grid>
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Мы ценим наших клиентов и дорожим их доверием</Typography>
            </Grid>
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Мы гарантируем качество и ответственность результата</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LandingLayout>
  );
}
