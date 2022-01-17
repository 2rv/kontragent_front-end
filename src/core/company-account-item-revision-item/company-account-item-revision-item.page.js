import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemRevisionItemContainer } from './company-account-item-reivision-item.container';

export function CompanyAccountItemRevisionItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemRevisionItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
