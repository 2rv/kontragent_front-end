import { NavigationComponent } from '../navigation/navigation.component';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { CompanyAdminListContainer } from './company-admin-list.container';

export function CompanyAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAdminListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
