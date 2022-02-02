import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';

import { CompanyAccountItemRevisionSelfItemContainer } from './company-account-item-reivision-self-item.container';

export function CompanyAccountItemRevisionSelfItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemRevisionSelfItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
