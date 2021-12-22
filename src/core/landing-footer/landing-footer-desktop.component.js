import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LandingLayout } from '../../lib/common/landing/landing-layout.component';

export function LandingFooterDesktopComponent() {
  return (
    <LandingLayout>
      <Grid container direction="row" display="flex" justifyContent="space-between" gap="32px">
        <Grid item>
          <Grid container direction="row" justifyContent="flex-start" gap="32px">
            <Grid item display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ fontWeight: '600', color: '#000' }}>Главная</Typography>
              <Typography variant="body2">Регистрация</Typography>
              <Typography variant="body2">Авторизация</Typography>
            </Grid>
            <Grid item display="flex" flexDirection="column">
              <Typography variant="body2">Privacy policy</Typography>
              <Typography variant="body2">Privacy terms</Typography>
              <Typography variant="body2">Privacy user terms</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
          <img height="22px" src="/static/img/logo.svg" />
          <Typography variant="body1">© 2021 Контрагент. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </LandingLayout>
  );
}
