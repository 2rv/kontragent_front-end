import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';

import { CompanyAccountItemRevisionKontragentItemContainer } from './company-account-item-reivision-kontragent-item.container';

export function CompanyAccountItemRevisionKontragentItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemRevisionKontragentItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
