import React from 'react';
import Grid from '@mui/material/Grid';

import { NavigationComponent } from '../navigation/navigation.component';
import { UserAdminItemTabComponent } from './frame/user-admin-item-tab';

import { UserAdminItemInfoContainer } from '../user-admin-item-info/user-admin-item-info.container';
import { UserAdminItemCompanyListContainer } from '../user-admin-item-company-list/user-admin-item-company-list.container';

const tab = [
  {
    id: 0,
    label: 'USER_ADMIN_ITEM.TAB.INFO',
    component: UserAdminItemInfoContainer,
  },
  {
    id: 1,
    label: 'USER_ADMIN_ITEM.TAB.COMPANIES',
    component: UserAdminItemCompanyListContainer,
  },
];

export function UserAdminItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <UserAdminItemTabComponent tab={tab} />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
