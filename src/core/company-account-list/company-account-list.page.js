import { NavigationComponent } from '../navigation/navigation.component';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { CompanyCreateInfoComponent } from './frame/company-create-info.component';
import { CompanyAccountListContainer } from './company-account-list.container';

export function CompanyAccountListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyCreateInfoComponent />
        </Grid>
        <Grid item>
          <CompanyAccountListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
