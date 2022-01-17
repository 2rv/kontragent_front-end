import React from 'react';
import { NavigationComponent } from '../navigation/navigation.component';
import Grid from '@mui/material/Grid';
import { FeedbackAdminItemContainer } from './feedback-admin-item.container';

export function FeedbackAdminItemPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <FeedbackAdminItemContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
