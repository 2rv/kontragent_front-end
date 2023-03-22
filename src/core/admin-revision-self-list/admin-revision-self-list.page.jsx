import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminRevisionSelfListContainer } from './admin-revision-self-list.container';

export function AdminRevisionSelfListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <AdminRevisionSelfListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
