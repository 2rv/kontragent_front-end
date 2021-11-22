import { NavigationComponent } from '../navigation/navigation.component';

import Grid from '@mui/material/Grid';
import { AdminRevisionInfoContainer } from '../admin-revision-info/admin-revision-info.container';
import { AdminRevisionReviewContainer } from './admin-revision-review.container';

export function AdminRevisionReviewPage() {
  return (
    <NavigationComponent>
      <Grid spacing={3} container>
        <Grid item>
          <AdminRevisionInfoContainer />
        </Grid>
        <Grid item>
          <AdminRevisionReviewContainer />
        </Grid>
      </Grid>
    </NavigationComponent>
  );
}
