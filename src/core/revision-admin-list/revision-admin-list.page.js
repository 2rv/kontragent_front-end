import React from 'react';
import { RevisionAdminListContainer } from './revision-admin-list.container';
import Grid from '@mui/material/Grid';
import { NavigationComponent } from '../navigation/navigation.component';

export function RevisionAdminListPage() {
  return (
    <div>
      <NavigationComponent>
        <Grid spacing={6} container>
          <Grid item>
            <RevisionAdminListContainer />
          </Grid>
        </Grid>
      </NavigationComponent>
    </div>
  );
}
