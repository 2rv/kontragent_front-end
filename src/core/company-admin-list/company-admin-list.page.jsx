import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { NavigationComponent } from '../navigation/navigation.component';
import { CompanyAdminUnregisteredListContainer } from '../company-admin-unregistered-list/company-admin-unregistered-list.container';
import { CompanyAdminListContainer } from './company-admin-list.container';

export function CompanyAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <Paper>
            <CompanyAdminListContainer />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <CompanyAdminUnregisteredListContainer />
          </Paper>
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
