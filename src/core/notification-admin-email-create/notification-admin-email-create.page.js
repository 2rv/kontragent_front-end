import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { NotificationAdminEmailCreateContainer } from './notification-admin-email-create.container';

export function NotificationAdminEmailCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <NotificationAdminEmailCreateContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
