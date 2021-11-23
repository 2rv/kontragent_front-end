import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { AdminPostListContainer } from './admin-post-list.container';

export function AdminPostListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <AdminPostListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
