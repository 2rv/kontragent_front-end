import React from 'react';
import Grid from '@mui/material/Grid';
import { USER_ADMIN_ITEM_NAVIGATION } from '../user-admin-item/user-admin-item.constant';
import { NavigationComponent } from '../navigation/navigation.component';
import { UserAdminRoleContainer } from '../user-admin-role/user-admin-role.container';
import { UserAdminItemInfoContainer } from './user-admin-item-info.container';
import { TabContainer } from '../../lib/common/navigation-tab/navigation-tab.container';
import { UserAdminBlockedRoleContainer } from '../user-admin-blocked-role/user-admin-blocked-role.container';

export function UserAdminItemInfoPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <TabContainer config={USER_ADMIN_ITEM_NAVIGATION} />
        </Grid>
        <Grid item>
          <UserAdminItemInfoContainer />
        </Grid>
        <Grid item>
          <UserAdminRoleContainer />
        </Grid>
      </Grid>
      <Grid item>
        <UserAdminBlockedRoleContainer />
      </Grid>
    </NavigationComponent>
  );
}
