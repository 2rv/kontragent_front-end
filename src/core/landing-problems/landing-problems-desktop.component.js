import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingProblemsDesktopComponent() {
  return (
    <LandingLayout>
      <Grid container gap="32px">
        <Grid item display="flex" flexDirection="column" textAlign="center">
          <Typography variant="landingTitleHero">
            Сталкиваетесь с этими проблемами?
          </Typography>
          <Typography variant="landingText">
            Мы раскроем вам правду и предложим решение!
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="center" textAlign="center" gap="20px">
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Побуждение откорректировать декларацию и заплатить бюджет?</Typography>
            </Grid>
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Регулярные вызовы на комиссию КАО ИФНС?</Typography>
            </Grid>
            <Grid item maxWidth="345px">
              <Typography variant="landingText">Частые запросы со стороны ИФНС вне рамок налоговых проверок?</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LandingLayout>
  );
}
