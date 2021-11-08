import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';

import { AdminRevisionReviewContainer } from './admin-revision-review.container';

export function AdminRevisionReviewPage() {
  return (
    <NavigationComponent>
      <Grid spacing={6} container>
        <Grid item>
          <AdminRevisionReviewContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
