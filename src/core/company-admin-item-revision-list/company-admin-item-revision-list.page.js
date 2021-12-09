import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ADMIN_ITEM_NAVIGATION } from '../company-admin-item/company-admin-item.constant';
import { CompanyAdminItemRevisionListContainer } from './company-admin-item-revision-list.container';

export function CompanyAdminItemRevisionListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ADMIN_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAdminItemRevisionListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
