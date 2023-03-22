import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminRevisionSelfItemContainer } from './admin-revision-self-item.container';

export function AdminRevisionSelfItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <AdminRevisionSelfItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
