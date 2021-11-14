import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { UserAdminItemCompanyListContainer } from './user-admin-item-company-list.container';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { USER_ADMIN_ITEM_NAVIGATION } from '../user-admin-item/user-admin-item.constant';

export function UserAdminItemCompanyListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <TabContainer config={USER_ADMIN_ITEM_NAVIGATION} />
        </Grid>

        <Grid item>
          <UserAdminItemCompanyListContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
