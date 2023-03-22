import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminRevisionKontragentListContainer } from './admin-revision-kontragent-list.container';

export function AdminRevisionKontragentListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <AdminRevisionKontragentListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
