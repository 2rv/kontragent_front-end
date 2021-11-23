import { UserAdminInviteContainer } from './user-admin-invite.container';
import { Grid } from '@mui/material';
import { NavigationComponent } from '../navigation/navigation.component';

export function UserAdminInvitePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <UserAdminInviteContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
