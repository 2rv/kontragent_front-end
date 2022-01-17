import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { CompanyAdminListContainer } from './company-admin-list.container';
import { CompanyAdminUnregisteredListContainer } from '../company-admin-unregistered-list/company-admin-unregistered-list.container';

export function CompanyAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAdminListContainer />
        </Grid>
        <Grid item>
          <CompanyAdminUnregisteredListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
