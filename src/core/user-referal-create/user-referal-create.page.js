import React from 'react';
import { UserReferalCreateContainer } from './user-referal-create.container';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { UserReferalListContainer } from '../user-referal-list/user-referal-list.container';
import { UserReferalInfoContainer } from '../user-referal-info/user-referal-info.container';

export function UserReferalCreatePage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <UserReferalCreateContainer />
        </Grid>
        <Grid item>
          <UserReferalListContainer />
        </Grid>
        <Grid item>
          <UserReferalInfoContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
