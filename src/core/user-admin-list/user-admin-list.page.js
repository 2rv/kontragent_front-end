import React from 'react';
import { UserAdminListContainer } from './user-admin-list.container';
import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';

export function UserAdminListPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <UserAdminListContainer />
      </Grid>
    </NavigationComponent>
  );
}
