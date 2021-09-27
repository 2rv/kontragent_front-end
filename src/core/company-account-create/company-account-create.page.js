import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { CompanyAccountCreateContainer } from './company-account-create.container';

export function CompanyAccountCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAccountCreateContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
