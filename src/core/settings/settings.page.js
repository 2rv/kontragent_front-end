import { NavigationComponent } from '../navigation/navigation.component';
import { SettingsChangePasswordContainer } from '../settings-change-password/settings-change-password.container';
import { SettingsChangeEmailContainer } from '../settings-change-email/settings-change-email.container';
import { AuthLogoutContainer } from '../auth-logout/auth-logout.container';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function SettingsPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <Typography variant="heading">Настройки</Typography>
        </Grid>
        <Grid item>
          <SettingsChangePasswordContainer />
        </Grid>
        <Grid item>
          <SettingsChangeEmailContainer />
        </Grid>
        <Grid item>
          <AuthLogoutContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
