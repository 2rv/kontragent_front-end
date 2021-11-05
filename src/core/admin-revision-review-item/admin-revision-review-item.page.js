import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { AdminRevisionReviewItemContainer } from './admin-revision-review-item.container';

export function AdminRevisionReviewItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <AdminRevisionReviewItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
