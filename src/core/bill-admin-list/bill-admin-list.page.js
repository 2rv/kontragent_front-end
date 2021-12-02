import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { BillAdminListContainer } from './bill-admin-list.container';

export function BillAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <BillAdminListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
