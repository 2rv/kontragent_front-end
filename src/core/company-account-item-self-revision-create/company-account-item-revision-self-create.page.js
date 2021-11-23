import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { CompanyAccountItemSelfRevisionCreateContainer } from './company-account-item-self-revision-create.container';

export function CompanyAccountItemSelfRevisionCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <CompanyAccountItemSelfRevisionCreateContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
