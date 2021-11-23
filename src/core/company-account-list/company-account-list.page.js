import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';
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
