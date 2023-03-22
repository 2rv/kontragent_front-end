import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminRevisionKontragentItemContainer } from './admin-revision-kontragent-item.container';

export function AdminRevisionKontragentItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <AdminRevisionKontragentItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
