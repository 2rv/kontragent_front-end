import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { CompanyAccountItemRevisionCreateContainer } from './company-account-item-revision-create.container';

export function CompanyAccountItemRevisionCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAccountItemRevisionCreateContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
