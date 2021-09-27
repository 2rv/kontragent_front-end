import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { CompanyAccountItemRevisionItemInfoContainer } from '../company-account-item-revision-item-info/company-account-item-reivision-item-info.container';

export function CompanyAccountItemRevisionItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <CompanyAccountItemRevisionItemInfoContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
