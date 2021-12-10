import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';

import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { COMPANY_ADMIN_ITEM_NAVIGATION } from '../company-admin-item/company-admin-item.constant';
import { CompanyAdminBillListContainer } from './company-admin-bill-list.container';

export function CompanyAdminItemBillListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <TabContainer config={COMPANY_ADMIN_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <CompanyAdminBillListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
